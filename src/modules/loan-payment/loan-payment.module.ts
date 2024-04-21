import { Module } from '@nestjs/common';
import { LoanPaymentResolver } from './loan-payment.resolver';
import { PrismaService } from '../../core/prisma/prisma.service';
import { LoanPaymentService } from './loan-payment.service';

@Module({
  providers: [LoanPaymentResolver, PrismaService, LoanPaymentService]
})
export class LoanPaymentModule {}
