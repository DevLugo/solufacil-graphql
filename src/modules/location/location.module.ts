import { Module } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { LocationResolver } from './location.resolver';

@Module({
  providers: [LocationResolver, PrismaService]
})
export class LocationModule {}
