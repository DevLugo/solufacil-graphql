import { Module } from '@nestjs/common';
import { EmployeeResolver } from './employee.resolver';
import { PrismaService } from '../../core/prisma/prisma.service';

@Module({
  providers: [EmployeeResolver, PrismaService]
})
export class EmployeeModule {}
