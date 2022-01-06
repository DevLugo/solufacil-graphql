import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { EmployeeResolver } from './employee.resolver';
import { EmployeeService } from './employee.service';

@Module({
  providers: [EmployeeService, EmployeeResolver],
  imports: [PrismaModule, AuthModule],
})
export class EmployeeModule {}
