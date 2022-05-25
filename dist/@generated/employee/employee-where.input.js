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
var EmployeeWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_employees_types_filter_input_1 = require("../prisma/enum-employees-types-filter.input");
const phone_list_relation_filter_input_1 = require("../phone/phone-list-relation-filter.input");
const document_list_relation_filter_input_1 = require("../document/document-list-relation-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const graphql_3 = require("@nestjs/graphql");
const loan_list_relation_filter_input_1 = require("../loan/loan-list-relation-filter.input");
const loan_payment_list_relation_filter_input_1 = require("../loan-payment/loan-payment-list-relation-filter.input");
const commission_payment_list_relation_filter_input_1 = require("../commission-payment/commission-payment-list-relation-filter.input");
const contract_list_relation_filter_input_1 = require("../contract/contract-list-relation-filter.input");
const expenses_list_relation_filter_input_1 = require("../expenses/expenses-list-relation-filter.input");
let EmployeeWhereInput = EmployeeWhereInput_1 = class EmployeeWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [EmployeeWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmployeeWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmployeeWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], EmployeeWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_employees_types_filter_input_1.EnumEmployeesTypesFilter, { nullable: true }),
    __metadata("design:type", enum_employees_types_filter_input_1.EnumEmployeesTypesFilter)
], EmployeeWhereInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_list_relation_filter_input_1.PhoneListRelationFilter, { nullable: true }),
    __metadata("design:type", phone_list_relation_filter_input_1.PhoneListRelationFilter)
], EmployeeWhereInput.prototype, "phones", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_list_relation_filter_input_1.DocumentListRelationFilter, { nullable: true }),
    __metadata("design:type", document_list_relation_filter_input_1.DocumentListRelationFilter)
], EmployeeWhereInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true }),
    __metadata("design:type", user_relation_filter_input_1.UserRelationFilter)
], EmployeeWhereInput.prototype, "user", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], EmployeeWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], EmployeeWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_list_relation_filter_input_1.LoanListRelationFilter, { nullable: true }),
    __metadata("design:type", loan_list_relation_filter_input_1.LoanListRelationFilter)
], EmployeeWhereInput.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], EmployeeWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_list_relation_filter_input_1.LoanPaymentListRelationFilter, { nullable: true }),
    __metadata("design:type", loan_payment_list_relation_filter_input_1.LoanPaymentListRelationFilter)
], EmployeeWhereInput.prototype, "loanPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_list_relation_filter_input_1.CommissionPaymentListRelationFilter, { nullable: true }),
    __metadata("design:type", commission_payment_list_relation_filter_input_1.CommissionPaymentListRelationFilter)
], EmployeeWhereInput.prototype, "commissionPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_list_relation_filter_input_1.ContractListRelationFilter, { nullable: true }),
    __metadata("design:type", contract_list_relation_filter_input_1.ContractListRelationFilter)
], EmployeeWhereInput.prototype, "contractEmployee", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_list_relation_filter_input_1.ContractListRelationFilter, { nullable: true }),
    __metadata("design:type", contract_list_relation_filter_input_1.ContractListRelationFilter)
], EmployeeWhereInput.prototype, "contractLoanLead", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_list_relation_filter_input_1.ExpensesListRelationFilter, { nullable: true }),
    __metadata("design:type", expenses_list_relation_filter_input_1.ExpensesListRelationFilter)
], EmployeeWhereInput.prototype, "Expenses", void 0);
EmployeeWhereInput = EmployeeWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], EmployeeWhereInput);
exports.EmployeeWhereInput = EmployeeWhereInput;
//# sourceMappingURL=employee-where.input.js.map