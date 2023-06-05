import { Module } from '@nestjs/common';
import { PaymentScheduleResolver } from './payment-schedule.resolver';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  providers: [PaymentScheduleResolver, PrismaService]
})
export class PaymentScheduleModule {}
