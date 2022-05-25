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
exports.PaymentSchedule = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const runtime_1 = require("@prisma/client/runtime");
const payment_state_enum_1 = require("../prisma/payment-state.enum");
const loan_model_1 = require("../loan/loan.model");
const loan_payment_model_1 = require("../loan-payment/loan-payment.model");
const commission_payment_model_1 = require("../commission-payment/commission-payment.model");
const payment_schedule_count_output_1 = require("./payment-schedule-count.output");
let PaymentSchedule = class PaymentSchedule {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", String)
], PaymentSchedule.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], PaymentSchedule.prototype, "numeration", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentSchedule.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentSchedule.prototype, "paidAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false, defaultValue: 0 }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentSchedule.prototype, "returnToCapital", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false, defaultValue: 0 }),
    __metadata("design:type", runtime_1.Decimal)
], PaymentSchedule.prototype, "profit", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_state_enum_1.PaymentState, { nullable: false }),
    __metadata("design:type", Object)
], PaymentSchedule.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false, defaultValue: false }),
    __metadata("design:type", Boolean)
], PaymentSchedule.prototype, "delayed", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], PaymentSchedule.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PaymentSchedule.prototype, "details", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], PaymentSchedule.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], PaymentSchedule.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_model_1.Loan, { nullable: false }),
    __metadata("design:type", loan_model_1.Loan)
], PaymentSchedule.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], PaymentSchedule.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_model_1.LoanPayment], { nullable: true }),
    __metadata("design:type", Array)
], PaymentSchedule.prototype, "loanPayments", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_model_1.CommissionPayment], { nullable: true }),
    __metadata("design:type", Array)
], PaymentSchedule.prototype, "CommissionPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_count_output_1.PaymentScheduleCount, { nullable: false }),
    __metadata("design:type", payment_schedule_count_output_1.PaymentScheduleCount)
], PaymentSchedule.prototype, "_count", void 0);
PaymentSchedule = __decorate([
    (0, graphql_2.ObjectType)()
], PaymentSchedule);
exports.PaymentSchedule = PaymentSchedule;
//# sourceMappingURL=payment-schedule.model.js.map