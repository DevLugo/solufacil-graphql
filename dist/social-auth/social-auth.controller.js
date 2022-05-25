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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialAuthController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let SocialAuthController = class SocialAuthController {
    async facebookLogin() {
        return common_1.HttpStatus.OK;
    }
    async test(req) {
        return {
            statusCode: common_1.HttpStatus.OK,
        };
    }
    async facebookLoginRedirect(req) {
        return {
            statusCode: common_1.HttpStatus.OK,
            data: req.user,
        };
    }
};
__decorate([
    (0, common_1.Get)('/facebook'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('facebook')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SocialAuthController.prototype, "facebookLogin", null);
__decorate([
    (0, common_1.Get)('/test'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('facebook')),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SocialAuthController.prototype, "test", null);
__decorate([
    (0, common_1.Get)('/facebook/redirect'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('facebook')),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SocialAuthController.prototype, "facebookLoginRedirect", null);
SocialAuthController = __decorate([
    (0, common_1.Controller)()
], SocialAuthController);
exports.SocialAuthController = SocialAuthController;
//# sourceMappingURL=social-auth.controller.js.map