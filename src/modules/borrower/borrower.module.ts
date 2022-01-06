import { Module } from '@nestjs/common';
import { BorrowerService } from './borrower.service';
import { BorrowerResolver } from './borrower.resolver';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [BorrowerService, BorrowerResolver],
  imports: [PrismaModule, AuthModule]
})
export class BorrowerModule {}
