import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanResolver } from './loan.resolver';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { LoanPaymentService } from './loan-payment/loan-payment.service';
import { PaymentScheduleService } from './payment-schedule/payment-schedule.service';
import { LoanTypeService } from './loan-type/loan-type.service';
import { UtilsService } from './utils.service';
import { PaymentScheduleResolver } from './payment-schedule/payment-schedule.resolver';
import { BorrowerService } from '../borrower/borrower.service';
import { EmployeeService } from '../employee/employee.service';
import { ContractService } from '../contract/contract.service';

@Module({
  providers: [LoanService, ContractService, LoanPaymentService, BorrowerService, UtilsService, EmployeeService, LoanTypeService, LoanResolver, PaymentScheduleResolver, PaymentScheduleService],
  imports: [PrismaModule, AuthModule]
})
export class LoanModule {}
