import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { PrismaService } from '../../core/prisma/prisma.service';

@Module({
  providers: [ContractService, PrismaService]
})
export class ContractModule {}
