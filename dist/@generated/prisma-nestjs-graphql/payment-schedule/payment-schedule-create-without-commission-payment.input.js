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
exports.PaymentScheduleCreateWithoutCommissionPaymentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const loan_create_nested_one_without_payment_schedule_input_1 = require("../loan/loan-create-nested-one-without-payment-schedule.input");
const loan_payment_create_nested_many_without_payment_schedules_input_1 = require("../loan-payment/loan-payment-create-nested-many-without-payment-schedules.input");
let PaymentScheduleCreateWithoutCommissionPaymentInput = class PaymentScheduleCreateWithoutCommissionPaymentInput {
};
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", String)
], PaymentScheduleCreateWithoutCommissionPaymentInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], PaymentScheduleCreateWithoutCommissionPaymentInput.prototype, "numeration", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleCreateWithoutCommissionPaymentInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleCreateWithoutCommissionPaymentInput.prototype, "paidAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleCreateWithoutCommissionPaymentInput.prototype, "returnToCapital", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleCreateWithoutCommissionPaymentInput.prototype, "profit", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleCreateWithoutCommissionPaymentInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PaymentScheduleCreateWithoutCommissionPaymentInput.prototype, "delayed", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], PaymentScheduleCreateWithoutCommissionPaymentInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PaymentScheduleCreateWithoutCommissionPaymentInput.prototype, "details", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleCreateWithoutCommissionPaymentInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleCreateWithoutCommissionPaymentInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_create_nested_one_without_payment_schedule_input_1.LoanCreateNestedOneWithoutPaymentScheduleInput, { nullable: false }),
    __metadata("design:type", loan_create_nested_one_without_payment_schedule_input_1.LoanCreateNestedOneWithoutPaymentScheduleInput)
], PaymentScheduleCreateWithoutCommissionPaymentInput.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_create_nested_many_without_payment_schedules_input_1.LoanPaymentCreateNestedManyWithoutPaymentSchedulesInput, { nullable: true }),
    __metadata("design:type", loan_payment_create_nested_many_without_payment_schedules_input_1.LoanPaymentCreateNestedManyWithoutPaymentSchedulesInput)
], PaymentScheduleCreateWithoutCommissionPaymentInput.prototype, "loanPayments", void 0);
PaymentScheduleCreateWithoutCommissionPaymentInput = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleCreateWithoutCommissionPaymentInput);
exports.PaymentScheduleCreateWithoutCommissionPaymentInput = PaymentScheduleCreateWithoutCommissionPaymentInput;
//# sourceMappingURL=payment-schedule-create-without-commission-payment.input.js.map