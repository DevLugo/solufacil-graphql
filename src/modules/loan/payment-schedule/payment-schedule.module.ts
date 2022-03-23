import { Module } from '@nestjs/common';
import { PaymentScheduleService } from './payment-schedule.service';
import { PaymentScheduleResolver } from './payment-schedule.resolver';

@Module({
  providers: [PaymentScheduleService, PaymentScheduleResolver]
})
export class PaymentScheduleModule {}
