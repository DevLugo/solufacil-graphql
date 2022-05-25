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
var LoanPaymentWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanPaymentWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const decimal_filter_input_1 = require("../prisma/decimal-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const graphql_3 = require("@nestjs/graphql");
const payment_schedule_list_relation_filter_input_1 = require("../payment-schedule/payment-schedule-list-relation-filter.input");
const loan_relation_filter_input_1 = require("../loan/loan-relation-filter.input");
const employee_relation_filter_input_1 = require("../employee/employee-relation-filter.input");
let LoanPaymentWhereInput = LoanPaymentWhereInput_1 = class LoanPaymentWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [LoanPaymentWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LoanPaymentWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LoanPaymentWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LoanPaymentWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], LoanPaymentWhereInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LoanPaymentWhereInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], LoanPaymentWhereInput.prototype, "comments", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LoanPaymentWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LoanPaymentWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_list_relation_filter_input_1.PaymentScheduleListRelationFilter, { nullable: true }),
    __metadata("design:type", payment_schedule_list_relation_filter_input_1.PaymentScheduleListRelationFilter)
], LoanPaymentWhereInput.prototype, "paymentSchedules", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_relation_filter_input_1.LoanRelationFilter, { nullable: true }),
    __metadata("design:type", loan_relation_filter_input_1.LoanRelationFilter)
], LoanPaymentWhereInput.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LoanPaymentWhereInput.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_relation_filter_input_1.EmployeeRelationFilter, { nullable: true }),
    __metadata("design:type", employee_relation_filter_input_1.EmployeeRelationFilter)
], LoanPaymentWhereInput.prototype, "employee", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LoanPaymentWhereInput.prototype, "employeeId", void 0);
LoanPaymentWhereInput = LoanPaymentWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], LoanPaymentWhereInput);
exports.LoanPaymentWhereInput = LoanPaymentWhereInput;
//# sourceMappingURL=loan-payment-where.input.js.map