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
var LoanWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_loan_state_filter_input_1 = require("../prisma/enum-loan-state-filter.input");
const graphql_3 = require("@nestjs/graphql");
const loan_payment_list_relation_filter_input_1 = require("../loan-payment/loan-payment-list-relation-filter.input");
const decimal_filter_input_1 = require("../prisma/decimal-filter.input");
const loantype_relation_filter_input_1 = require("../loantype/loantype-relation-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const employee_relation_filter_input_1 = require("../employee/employee-relation-filter.input");
const contract_relation_filter_input_1 = require("../contract/contract-relation-filter.input");
const payment_schedule_list_relation_filter_input_1 = require("../payment-schedule/payment-schedule-list-relation-filter.input");
const commission_payment_list_relation_filter_input_1 = require("../commission-payment/commission-payment-list-relation-filter.input");
let LoanWhereInput = LoanWhereInput_1 = class LoanWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [LoanWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoanWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LoanWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoanWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LoanWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoanWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LoanWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", enum_loan_state_filter_input_1.EnumLoanStateFilter)
], LoanWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", loan_payment_list_relation_filter_input_1.LoanPaymentListRelationFilter)
], LoanWhereInput.prototype, "payments", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], LoanWhereInput.prototype, "weeklyPaymentAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], LoanWhereInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_relation_filter_input_1.LoantypeRelationFilter, { nullable: true }),
    __metadata("design:type", loantype_relation_filter_input_1.LoantypeRelationFilter)
], LoanWhereInput.prototype, "loanType", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LoanWhereInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LoanWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_relation_filter_input_1.EmployeeRelationFilter, { nullable: true }),
    __metadata("design:type", employee_relation_filter_input_1.EmployeeRelationFilter)
], LoanWhereInput.prototype, "employee", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LoanWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_relation_filter_input_1.ContractRelationFilter, { nullable: true }),
    __metadata("design:type", contract_relation_filter_input_1.ContractRelationFilter)
], LoanWhereInput.prototype, "contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LoanWhereInput.prototype, "contractId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LoanWhereInput.prototype, "loantypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LoanWhereInput.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_list_relation_filter_input_1.PaymentScheduleListRelationFilter, { nullable: true }),
    __metadata("design:type", payment_schedule_list_relation_filter_input_1.PaymentScheduleListRelationFilter)
], LoanWhereInput.prototype, "paymentSchedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_list_relation_filter_input_1.CommissionPaymentListRelationFilter, { nullable: true }),
    __metadata("design:type", commission_payment_list_relation_filter_input_1.CommissionPaymentListRelationFilter)
], LoanWhereInput.prototype, "CommissionPayment", void 0);
LoanWhereInput = LoanWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], LoanWhereInput);
exports.LoanWhereInput = LoanWhereInput;
//# sourceMappingURL=loan-where.input.js.map