"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalModule = void 0;
const common_1 = require("@nestjs/common");
const local_service_1 = require("./local.service");
const local_resolver_1 = require("./local.resolver");
const prisma_module_1 = require("../../core/prisma/prisma.module");
const auth_module_1 = require("../auth/auth.module");
let LocalModule = class LocalModule {
};
LocalModule = __decorate([
    (0, common_1.Module)({
        providers: [local_service_1.LocalService, local_resolver_1.LocalResolver],
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule]
    })
], LocalModule);
exports.LocalModule = LocalModule;
//# sourceMappingURL=local.module.js.map