"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const bcryptjs_1 = require("bcryptjs");
let AuthService = class AuthService {
    constructor(_db, _jwtService) {
        this._db = _db;
        this._jwtService = _jwtService;
    }
    async signup(data) {
        const { email, password } = data;
        const aaa = await this._db.user.findFirst({
            where: { email: email }
        });
        if (aaa) {
            throw new common_1.ConflictException('Email already exists');
        }
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const passwordHashed = await (0, bcryptjs_1.hash)(password, salt);
        const newUser = await this._db.user.create({
            data: {
                email: data.email,
                lastName: data.lastName,
                firstName: data.firstName,
                fullName: data.firstName + data.lastName,
                password: passwordHashed
            }
        });
        return newUser;
    }
    async signin(signinDto) {
        const { email, password } = signinDto;
        const user = await this._db.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new common_1.NotFoundException('User does not exist');
        }
        const isMatch = await (0, bcryptjs_1.compare)(password, user.password);
        if (!isMatch) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const payload = {
            id: user.id,
            email: user.email,
        };
        const token = await this._jwtService.sign(payload);
        return {
            token,
            user
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map