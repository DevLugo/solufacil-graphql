import { Module } from '@nestjs/common';
import { AccountResolver } from './account.resolver';
import { PrismaService } from '../../core/prisma/prisma.service';

@Module({
  providers: [AccountResolver, PrismaService]
})
export class AccountModule {}
