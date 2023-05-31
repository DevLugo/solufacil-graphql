import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { LocationService } from '../location/location.service';
import { RouteResolver } from './route.resolver';

@Module({
  providers: [RouteResolver,LocationService],
  imports: [PrismaModule, AuthModule]

})
export class RouteModule {}
