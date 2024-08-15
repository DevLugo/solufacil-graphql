import { Module } from '@nestjs/common';
import { TransactionResolver } from './transaction.resolver';
import { TransactionService } from './transaction.service';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  providers: [TransactionResolver, TransactionService, PrismaService],
})
export class TransactionModule {}
