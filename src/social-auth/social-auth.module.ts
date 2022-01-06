import { Module } from '@nestjs/common';
import { SocialAuthController } from './social-auth.controller';

@Module({
  providers: [],
  controllers: [SocialAuthController]
})
export class SocialAuthModule {}
