import { Module } from '@nestjs/common';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { LocationResolver } from './location.resolver';
import { LocationService } from './location.service';

@Module({
  providers: [LocationResolver, LocationService],
  imports: [PrismaModule, AuthModule]

})
export class LocationModule {}
