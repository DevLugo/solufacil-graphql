import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { SocialAuthModule } from './social-auth/social-auth.module';
import { PrismaService } from './core/prisma/prisma.service';
import { ContractTypeModule } from './modules/contract-type/contract-type.module';
import { BorrowerModule } from './modules/borrower/borrower.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { ContractModule } from './modules/contract/contract.module';
import { LoanModule } from './modules/loan/loan.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [SocialAuthModule, CoreModule, ContractTypeModule, BorrowerModule, EmployeeModule, ContractModule, LoanModule, SocialAuthModule, AuthModule],
  providers: [PrismaService],
})
export class AppModule {}
