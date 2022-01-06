import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractResolver } from './contract.resolver';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [ContractService, ContractResolver],
  imports: [PrismaModule, AuthModule]
})
export class ContractModule {}
