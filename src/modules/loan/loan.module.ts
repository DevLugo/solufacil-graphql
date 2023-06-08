import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanResolver } from './loan.resolver';
import { PrismaService } from '../../core/prisma/prisma.service';

@Module({
  providers: [LoanService, LoanResolver, PrismaService]
})
export class LoanModule {}
