import { Module } from '@nestjs/common';
import { LoanPaymentResolver } from './loan-payment.resolver';

@Module({
  providers: [LoanPaymentResolver]
})
export class LoanPaymentModule {}
