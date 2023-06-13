import { Module } from '@nestjs/common';
import { PersonalDataResolver } from './personal-data.resolver';
import { PrismaService } from '../../core/prisma/prisma.service';

@Module({
  providers: [PersonalDataResolver, PrismaService]
})
export class PersonalDataModule {}
