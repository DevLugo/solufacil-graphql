import { Module } from '@nestjs/common';
import { PaymentScheduleResolver } from './payment-schedule.resolver';
import { PrismaService } from '../../core/prisma/prisma.service';
import { PaymentScheduleService } from './payment-schedule.service';

@Module({
  providers: [PaymentScheduleResolver, PrismaService, PaymentScheduleService]
})
export class PaymentScheduleModule {}
