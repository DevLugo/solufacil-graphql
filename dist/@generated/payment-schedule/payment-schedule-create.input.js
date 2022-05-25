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
exports.PaymentScheduleCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const loan_create_nested_one_without_payment_schedule_input_1 = require("../loan/loan-create-nested-one-without-payment-schedule.input");
const loan_payment_create_nested_many_without_payment_schedules_input_1 = require("../loan-payment/loan-payment-create-nested-many-without-payment-schedules.input");
const commission_payment_create_nested_many_without_payment_schedule_input_1 = require("../commission-payment/commission-payment-create-nested-many-without-payment-schedule.input");
let PaymentScheduleCreateInput = class PaymentScheduleCreateInput {
};
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", String)
], PaymentScheduleCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], PaymentScheduleCreateInput.prototype, "numeration", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleCreateInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleCreateInput.prototype, "paidAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleCreateInput.prototype, "returnToCapital", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentScheduleCreateInput.prototype, "profit", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleCreateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PaymentScheduleCreateInput.prototype, "delayed", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], PaymentScheduleCreateInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PaymentScheduleCreateInput.prototype, "details", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_create_nested_one_without_payment_schedule_input_1.LoanCreateNestedOneWithoutPaymentScheduleInput, { nullable: false }),
    __metadata("design:type", loan_create_nested_one_without_payment_schedule_input_1.LoanCreateNestedOneWithoutPaymentScheduleInput)
], PaymentScheduleCreateInput.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_create_nested_many_without_payment_schedules_input_1.LoanPaymentCreateNestedManyWithoutPaymentSchedulesInput, { nullable: true }),
    __metadata("design:type", loan_payment_create_nested_many_without_payment_schedules_input_1.LoanPaymentCreateNestedManyWithoutPaymentSchedulesInput)
], PaymentScheduleCreateInput.prototype, "loanPayments", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_create_nested_many_without_payment_schedule_input_1.CommissionPaymentCreateNestedManyWithoutPaymentScheduleInput, { nullable: true }),
    __metadata("design:type", commission_payment_create_nested_many_without_payment_schedule_input_1.CommissionPaymentCreateNestedManyWithoutPaymentScheduleInput)
], PaymentScheduleCreateInput.prototype, "CommissionPayment", void 0);
PaymentScheduleCreateInput = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleCreateInput);
exports.PaymentScheduleCreateInput = PaymentScheduleCreateInput;
//# sourceMappingURL=payment-schedule-create.input.js.map