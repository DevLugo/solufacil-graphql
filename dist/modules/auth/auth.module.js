"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const config_module_1 = require("../../core/config/config.module");
const config_service_1 = require("../../core/config/config.service");
const config_keys_1 = require("../../core/config/config.keys");
const auth_resolver_1 = require("./auth.resolver");
const auth_service_1 = require("./auth.service");
const prisma_module_1 = require("../../core/prisma/prisma.module");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt',
            }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_module_1.ConfigModule],
                inject: [config_service_1.ConfigService],
                useFactory(config) {
                    return {
                        secret: config.get(config_keys_1.Configuration.JWT_SECRET),
                        signOptions: {
                            expiresIn: 3600,
                        },
                    };
                },
            }),
        ],
        providers: [auth_service_1.AuthService, config_service_1.ConfigService, jwt_strategy_1.JwtStrategy, auth_resolver_1.AuthResolver],
        exports: [jwt_strategy_1.JwtStrategy, passport_1.PassportModule]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map