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
exports.PaymentScheduleUncheckedCreateWithoutLoanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const graphql_4 = require("@nestjs/graphql");
const loan_payment_unchecked_create_nested_many_without_payment_schedules_input_1 = require("../loan-payment/loan-payment-unchecked-create-nested-many-without-payment-schedules.input");
const commission_payment_unchecked_create_nested_many_without_payment_schedule_input_1 = require("../commission-payment/commission-payment-unchecked-create-nested-many-without-payment-schedule.input");
let PaymentScheduleUncheckedCreateWithoutLoanInput = class PaymentScheduleUncheckedCreateWithoutLoanInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PaymentScheduleUncheckedCreateWithoutLoanInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], PaymentScheduleUncheckedCreateWithoutLoanInput.prototype, "numeration", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleUncheckedCreateWithoutLoanInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleUncheckedCreateWithoutLoanInput.prototype, "paidAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleUncheckedCreateWithoutLoanInput.prototype, "returnToCapital", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleUncheckedCreateWithoutLoanInput.prototype, "profit", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleUncheckedCreateWithoutLoanInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PaymentScheduleUncheckedCreateWithoutLoanInput.prototype, "delayed", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], PaymentScheduleUncheckedCreateWithoutLoanInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PaymentScheduleUncheckedCreateWithoutLoanInput.prototype, "details", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleUncheckedCreateWithoutLoanInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_4.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleUncheckedCreateWithoutLoanInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_unchecked_create_nested_many_without_payment_schedules_input_1.LoanPaymentUncheckedCreateNestedManyWithoutPaymentSchedulesInput, { nullable: true }),
    __metadata("design:type", loan_payment_unchecked_create_nested_many_without_payment_schedules_input_1.LoanPaymentUncheckedCreateNestedManyWithoutPaymentSchedulesInput)
], PaymentScheduleUncheckedCreateWithoutLoanInput.prototype, "loanPayments", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_unchecked_create_nested_many_without_payment_schedule_input_1.CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput, { nullable: true }),
    __metadata("design:type", commission_payment_unchecked_create_nested_many_without_payment_schedule_input_1.CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput)
], PaymentScheduleUncheckedCreateWithoutLoanInput.prototype, "CommissionPayment", void 0);
PaymentScheduleUncheckedCreateWithoutLoanInput = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleUncheckedCreateWithoutLoanInput);
exports.PaymentScheduleUncheckedCreateWithoutLoanInput = PaymentScheduleUncheckedCreateWithoutLoanInput;
//# sourceMappingURL=payment-schedule-unchecked-create-without-loan.input.js.map