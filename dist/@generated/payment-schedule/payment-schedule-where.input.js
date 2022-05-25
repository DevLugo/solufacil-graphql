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
var PaymentScheduleWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentScheduleWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const decimal_filter_input_1 = require("../prisma/decimal-filter.input");
const enum_payment_state_filter_input_1 = require("../prisma/enum-payment-state-filter.input");
const graphql_3 = require("@nestjs/graphql");
const bool_filter_input_1 = require("../prisma/bool-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const loan_relation_filter_input_1 = require("../loan/loan-relation-filter.input");
const loan_payment_list_relation_filter_input_1 = require("../loan-payment/loan-payment-list-relation-filter.input");
const commission_payment_list_relation_filter_input_1 = require("../commission-payment/commission-payment-list-relation-filter.input");
let PaymentScheduleWhereInput = PaymentScheduleWhereInput_1 = class PaymentScheduleWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [PaymentScheduleWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PaymentScheduleWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PaymentScheduleWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], PaymentScheduleWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], PaymentScheduleWhereInput.prototype, "numeration", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], PaymentScheduleWhereInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], PaymentScheduleWhereInput.prototype, "paidAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], PaymentScheduleWhereInput.prototype, "returnToCapital", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], PaymentScheduleWhereInput.prototype, "profit", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", enum_payment_state_filter_input_1.EnumPaymentStateFilter)
], PaymentScheduleWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_filter_input_1.BoolFilter, { nullable: true }),
    __metadata("design:type", bool_filter_input_1.BoolFilter)
], PaymentScheduleWhereInput.prototype, "delayed", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], PaymentScheduleWhereInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], PaymentScheduleWhereInput.prototype, "details", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], PaymentScheduleWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], PaymentScheduleWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_relation_filter_input_1.LoanRelationFilter, { nullable: true }),
    __metadata("design:type", loan_relation_filter_input_1.LoanRelationFilter)
], PaymentScheduleWhereInput.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], PaymentScheduleWhereInput.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_list_relation_filter_input_1.LoanPaymentListRelationFilter, { nullable: true }),
    __metadata("design:type", loan_payment_list_relation_filter_input_1.LoanPaymentListRelationFilter)
], PaymentScheduleWhereInput.prototype, "loanPayments", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_list_relation_filter_input_1.CommissionPaymentListRelationFilter, { nullable: true }),
    __metadata("design:type", commission_payment_list_relation_filter_input_1.CommissionPaymentListRelationFilter)
], PaymentScheduleWhereInput.prototype, "CommissionPayment", void 0);
PaymentScheduleWhereInput = PaymentScheduleWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleWhereInput);
exports.PaymentScheduleWhereInput = PaymentScheduleWhereInput;
//# sourceMappingURL=payment-schedule-where.input.js.map