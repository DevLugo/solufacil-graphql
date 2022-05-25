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
exports.CommissionPaymentUncheckedCreateWithoutEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const commission_payment_status_enum_1 = require("../prisma/commission-payment-status.enum");
let CommissionPaymentUncheckedCreateWithoutEmployeeInput = class CommissionPaymentUncheckedCreateWithoutEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommissionPaymentUncheckedCreateWithoutEmployeeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], CommissionPaymentUncheckedCreateWithoutEmployeeInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommissionPaymentUncheckedCreateWithoutEmployeeInput.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CommissionPaymentUncheckedCreateWithoutEmployeeInput.prototype, "paymentScheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_status_enum_1.CommissionPaymentStatus, { nullable: false }),
    __metadata("design:type", Object)
], CommissionPaymentUncheckedCreateWithoutEmployeeInput.prototype, "status", void 0);
CommissionPaymentUncheckedCreateWithoutEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], CommissionPaymentUncheckedCreateWithoutEmployeeInput);
exports.CommissionPaymentUncheckedCreateWithoutEmployeeInput = CommissionPaymentUncheckedCreateWithoutEmployeeInput;
//# sourceMappingURL=commission-payment-unchecked-create-without-employee.input.js.map