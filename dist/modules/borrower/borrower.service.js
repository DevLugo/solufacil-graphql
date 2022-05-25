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
exports.BorrowerService = void 0;
const prisma_service_1 = require("../../core/prisma/prisma.service");
const common_1 = require("@nestjs/common");
let BorrowerService = class BorrowerService {
    constructor(db) {
        this.db = db;
    }
    async create(data) {
        if (!!data.email) {
            const dbEmail = await this.db.borrower.findUnique({
                where: { email: data.email },
            });
            if (!!dbEmail)
                throw new Error(`El email ${dbEmail.email} ya existe`);
        }
        for (const phone of data.phones.create) {
            const dbPhone = await this.db.phone.findUnique({
                where: { number: phone.number }
            });
            if (!!dbPhone)
                throw new Error(`El télefono ${dbPhone.number} ya existe`);
        }
        return await this.db.borrower.create({ data: {
                name: data.name,
                address: data.address
            } });
    }
    async getMany(data) {
        return await this.db.borrower.findMany({ where: data });
    }
};
BorrowerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BorrowerService);
exports.BorrowerService = BorrowerService;
//# sourceMappingURL=borrower.service.js.map