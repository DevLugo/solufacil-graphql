import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanResolver } from './loan.resolver';
import { PrismaService } from '../../core/prisma/prisma.service';
import { PaymentScheduleService } from '../payment-schedule/payment-schedule.service';
import { ContractService } from '../contract/contract.service';
import { LoanPaymentService } from '../loan-payment/loan-payment.service';

@Module({
  providers: [LoanService, LoanResolver, PrismaService,PaymentScheduleService, ContractService, LoanPaymentService]
})
export class LoanModule {}
