import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';
import { CoreModule } from './core/core.module';
import { PrismaService } from './core/prisma/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { BorrowerModule } from './modules/borrower/borrower.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { LoanTypesModule } from './modules/loan-types/loan-types.module';
import { LoanModule } from './modules/loan/loan.module';
import { LocationModule } from './modules/location/location.module';
import { PersonalDataModule } from './modules/personal-data/personal-data.module';
import { RouteModule } from './modules/route/route.module';
import { PaymentScheduleModule } from './modules/payment-schedule/payment-schedule.module';
import { AddressModule } from './modules/address/address.module';
import { LoanPaymentModule } from './modules/loan-payment/loan-payment.module';

@Module({
  imports: [
    CoreModule,
    LoanModule,
    AuthModule,
    RouteModule,
    AddressModule,
    LocationModule,
    EmployeeModule,
    LocationModule,
    BorrowerModule,
    LoanTypesModule,
    LoanPaymentModule,
    PersonalDataModule,
    PaymentScheduleModule,
  ],
  providers: [PrismaService, AppResolver],
})
export class AppModule { }
