import { Module } from '@nestjs/common';
import { BorrowerResolver } from './borrower.resolver';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  providers: [BorrowerResolver, PrismaService]
})
export class BorrowerModule {}
