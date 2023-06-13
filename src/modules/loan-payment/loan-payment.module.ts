import { Module } from '@nestjs/common';
import { LoanPaymentResolver } from './loan-payment.resolver';
import { PrismaService } from '../../core/prisma/prisma.service';

@Module({
  providers: [LoanPaymentResolver, PrismaService]
})
export class LoanPaymentModule {}
