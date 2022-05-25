import { PrismaService } from "../../../core/prisma/prisma.service";
import { ConfigService } from "../../../core/config/config.service";
import { IJwtPayload } from "../jwt-payload.interface";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly _configService;
    private readonly _db;
    constructor(_configService: ConfigService, _db: PrismaService);
    validate(payload: IJwtPayload): Promise<IJwtPayload>;
}
export {};
