import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';
import { CoreModule } from './core/core.module';
import { PrismaService } from './core/prisma/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { LocationModule } from './modules/location/location.module';
import { PersonalDataModule } from './modules/personal-data/personal-data.module';
import { RouteModule } from './modules/route/route.module';
import { BorrowerModule } from './modules/borrower/borrower.module';
import { LoanModule } from './modules/loan/loan.module';

@Module({
  imports: [
    CoreModule,
    AuthModule,
    RouteModule,
    EmployeeModule,
    LocationModule,
    PersonalDataModule,
    BorrowerModule,
    LoanModule
  ],
  providers: [PrismaService, AppResolver],
})
export class AppModule { }
