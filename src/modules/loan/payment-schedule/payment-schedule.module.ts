import { Module } from '@nestjs/common';
import { PaymentScheduleService } from './payment-schedule.service';

@Module({
  providers: [PaymentScheduleService]
})
export class PaymentScheduleModule {}
