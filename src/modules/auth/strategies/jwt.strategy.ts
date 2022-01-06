import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { PrismaService } from "../../../core/prisma/prisma.service";
import { Configuration } from "../../../core/config/config.keys";
import { ConfigService } from "../../../core/config/config.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { IJwtPayload } from "../jwt-payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        private readonly _configService: ConfigService,
        private readonly _db: PrismaService)
        {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: _configService.get(Configuration.JWT_SECRET),
        })
    }

    async validate(payload: IJwtPayload){
        const { email } = payload;
        const user = await this._db.user.findUnique({
            where: {
                email
            }
        });

        if(!user) throw new UnauthorizedException();
        return payload;
    }
}