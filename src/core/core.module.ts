import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql/graphql.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [GraphqlModule, PrismaModule, ConfigModule],
})
export class CoreModule {}
