import { Module } from '@nestjs/common';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { ContractTypeService } from './contract-type.service';
import { ContractTypeResolver } from './contract-type.resolver';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [ContractTypeService, ContractTypeResolver],
  imports: [PrismaModule, AuthModule]
})
export class ContractTypeModule {}
