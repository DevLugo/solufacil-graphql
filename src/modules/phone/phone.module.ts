import { Module } from '@nestjs/common';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { PhoneResolver } from './phone.resolver';
import { PhoneService } from './phone.service';

@Module({
  providers: [PhoneResolver, PhoneService],
  imports: [PrismaModule, AuthModule]

})
export class PhoneModule {}
