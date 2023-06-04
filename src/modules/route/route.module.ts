import { Module } from '@nestjs/common';
import { RouteResolver } from './route.resolver';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  providers: [RouteResolver, PrismaService]
})
export class RouteModule {}
