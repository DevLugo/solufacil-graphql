import { Module } from '@nestjs/common';
import { FacebookStrategy } from './facebook.strategy';

@Module({
  providers: [FacebookStrategy],
})
export class AuthModule {}
