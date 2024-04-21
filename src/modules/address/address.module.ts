import { Module } from '@nestjs/common';
import { AddressResolver } from './address.resolver';
import { PrismaService } from '../../core/prisma/prisma.service';

@Module({
  providers: [AddressResolver, PrismaService],
})
export class AddressModule {}
