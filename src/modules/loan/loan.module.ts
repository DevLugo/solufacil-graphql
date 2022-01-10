import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanResolver } from './loan.resolver';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { LoanPaymentService } from './loan-payment/loan-payment.service';
import { LoanTypeService } from './loan-type/loan-type.service';

@Module({
  providers: [LoanService, LoanPaymentService, LoanTypeService, LoanResolver, LoanPaymentService],
  imports: [PrismaModule, AuthModule]
})
export class LoanModule {}
