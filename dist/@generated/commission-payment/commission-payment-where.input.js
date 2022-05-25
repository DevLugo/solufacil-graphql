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
var CommissionPaymentWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionPaymentWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const decimal_filter_input_1 = require("../prisma/decimal-filter.input");
const payment_schedule_relation_filter_input_1 = require("../payment-schedule/payment-schedule-relation-filter.input");
const loan_relation_filter_input_1 = require("../loan/loan-relation-filter.input");
const employee_relation_filter_input_1 = require("../employee/employee-relation-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const enum_commission_payment_status_filter_input_1 = require("../prisma/enum-commission-payment-status-filter.input");
let CommissionPaymentWhereInput = CommissionPaymentWhereInput_1 = class CommissionPaymentWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CommissionPaymentWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CommissionPaymentWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CommissionPaymentWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CommissionPaymentWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], CommissionPaymentWhereInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_relation_filter_input_1.PaymentScheduleRelationFilter, { nullable: true }),
    __metadata("design:type", payment_schedule_relation_filter_input_1.PaymentScheduleRelationFilter)
], CommissionPaymentWhereInput.prototype, "paymentSchedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_relation_filter_input_1.LoanRelationFilter, { nullable: true }),
    __metadata("design:type", loan_relation_filter_input_1.LoanRelationFilter)
], CommissionPaymentWhereInput.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_relation_filter_input_1.EmployeeRelationFilter, { nullable: true }),
    __metadata("design:type", employee_relation_filter_input_1.EmployeeRelationFilter)
], CommissionPaymentWhereInput.prototype, "employee", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CommissionPaymentWhereInput.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CommissionPaymentWhereInput.prototype, "paymentScheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CommissionPaymentWhereInput.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_commission_payment_status_filter_input_1.EnumCommissionPaymentStatusFilter, { nullable: true }),
    __metadata("design:type", enum_commission_payment_status_filter_input_1.EnumCommissionPaymentStatusFilter)
], CommissionPaymentWhereInput.prototype, "status", void 0);
CommissionPaymentWhereInput = CommissionPaymentWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], CommissionPaymentWhereInput);
exports.CommissionPaymentWhereInput = CommissionPaymentWhereInput;
//# sourceMappingURL=commission-payment-where.input.js.map