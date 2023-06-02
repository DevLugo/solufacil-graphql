import { Module } from '@nestjs/common';
import { LocalService } from './local.service';
import { LocalResolver } from './local.resolver';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [LocalService, LocalResolver],
  imports: [PrismaModule, AuthModule]
})
export class LocalModule {}
