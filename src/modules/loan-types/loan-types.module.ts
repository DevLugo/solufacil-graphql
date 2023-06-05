import { Module } from '@nestjs/common';
import { LoanTypesResolver } from './loan-types.resolver';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  providers: [LoanTypesResolver, PrismaService]
})
export class LoanTypesModule {}
