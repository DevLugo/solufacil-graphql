import { Injectable, OnModuleInit, OnModuleDestroy, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { Prisma } from '@prisma/client';
import * as moment from 'moment-timezone';

export function transactionMiddleware(prisma: PrismaClient): Prisma.Middleware {
  return async (params, next) => {
    if ((params.action === 'create' || params.action === 'update') && params.model === 'Transaction') {
      const data = params.args.data;

      if (data.status === 'approved') {
        const result = await next(params);
        const amountChange = data.type === 'income' ? result.amount : -result.amount;

        const sourceAccountId = await prisma.account.findUnique({
          where: { id: result.sourceAccountId },
        });

        const destinationAccountId = await prisma.account.findUnique({
          where: { id: result.destinationAccountId },
        });

        // Update the balance for the destinationAccountId
        if (sourceAccountId && destinationAccountId) {
          await prisma.account.update({
            where: { id: sourceAccountId.id },
            data: { amount: { increment: -amountChange } },
          });
          await prisma.account.update({
            where: { id: destinationAccountId.id },
            data: { amount: { increment: +amountChange } },
          });
        }else if(sourceAccountId) {
          await prisma.account.update({
            where: { id: sourceAccountId.id },
            data: { amount: { increment: -amountChange } },
          });
        }else if(destinationAccountId) {
          await prisma.account.update({
            where: { id: destinationAccountId.id },
            data: { amount: { increment: +amountChange } },
          });
        }

        return result;
      }
    }

    return next(params);
  };
}
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super(
      {
        log: [
          { emit: 'event', level: 'query' },
          { emit: 'stdout', level: 'info' },
          { emit: 'stdout', level: 'warn' },
          { emit: 'stdout', level: 'error' },
        ],
        errorFormat: 'pretty',
      }
    );
    //this.$use(transactionMiddleware(this));
  }

  async onModuleInit() {
    await this.$connect();
  }
  /* async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async (event) => {
      console.log(event.name);
      await app.close();
    });
  } */

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
