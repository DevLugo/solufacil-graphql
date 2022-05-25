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
exports.PaymentScheduleCreateManyLoanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
let PaymentScheduleCreateManyLoanInput = class PaymentScheduleCreateManyLoanInput {
};
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", String)
], PaymentScheduleCreateManyLoanInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], PaymentScheduleCreateManyLoanInput.prototype, "numeration", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleCreateManyLoanInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleCreateManyLoanInput.prototype, "paidAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleCreateManyLoanInput.prototype, "returnToCapital", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleCreateManyLoanInput.prototype, "profit", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleCreateManyLoanInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PaymentScheduleCreateManyLoanInput.prototype, "delayed", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], PaymentScheduleCreateManyLoanInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PaymentScheduleCreateManyLoanInput.prototype, "details", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleCreateManyLoanInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleCreateManyLoanInput.prototype, "updatedAt", void 0);
PaymentScheduleCreateManyLoanInput = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleCreateManyLoanInput);
exports.PaymentScheduleCreateManyLoanInput = PaymentScheduleCreateManyLoanInput;
//# sourceMappingURL=payment-schedule-create-many-loan.input.js.map