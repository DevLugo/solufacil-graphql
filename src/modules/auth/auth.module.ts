import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigModule } from '../../core/config/config.module';
import { ConfigService } from '../../core/config/config.service';
import { Configuration } from '../../core/config/config.keys';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { PrismaModule } from '../../core/prisma/prisma.module';

@Module({
    imports:[
        PrismaModule,
        PassportModule.register({
            defaultStrategy: 'jwt',
        }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory(config: ConfigService) {
                return {
                    secret: config.get(Configuration.JWT_SECRET),
                    signOptions: {
                        expiresIn: 3600,
                    },
                };
            },
        }),
    ],
    providers: [AuthService, ConfigService, JwtStrategy, AuthResolver],
    exports: [JwtStrategy, PassportModule]
})
export class AuthModule {}
