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
var ContractWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const borrower_relation_filter_input_1 = require("../borrower/borrower-relation-filter.input");
const document_list_relation_filter_input_1 = require("../document/document-list-relation-filter.input");
const loan_list_relation_filter_input_1 = require("../loan/loan-list-relation-filter.input");
const graphql_3 = require("@nestjs/graphql");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const contract_type_relation_filter_input_1 = require("../contract-type/contract-type-relation-filter.input");
const employee_relation_filter_input_1 = require("../employee/employee-relation-filter.input");
let ContractWhereInput = ContractWhereInput_1 = class ContractWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ContractWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ContractWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ContractWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ContractWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ContractWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ContractWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ContractWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_relation_filter_input_1.BorrowerRelationFilter, { nullable: true }),
    __metadata("design:type", borrower_relation_filter_input_1.BorrowerRelationFilter)
], ContractWhereInput.prototype, "borrower", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ContractWhereInput.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_list_relation_filter_input_1.DocumentListRelationFilter, { nullable: true }),
    __metadata("design:type", document_list_relation_filter_input_1.DocumentListRelationFilter)
], ContractWhereInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", loan_list_relation_filter_input_1.LoanListRelationFilter)
], ContractWhereInput.prototype, "loans", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ContractWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ContractWhereInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ContractWhereInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ContractWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_relation_filter_input_1.ContractTypeRelationFilter, { nullable: true }),
    __metadata("design:type", contract_type_relation_filter_input_1.ContractTypeRelationFilter)
], ContractWhereInput.prototype, "contractType", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ContractWhereInput.prototype, "contractTypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ContractWhereInput.prototype, "loanLeadId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ContractWhereInput.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_relation_filter_input_1.EmployeeRelationFilter, { nullable: true }),
    __metadata("design:type", employee_relation_filter_input_1.EmployeeRelationFilter)
], ContractWhereInput.prototype, "loanLead", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_relation_filter_input_1.EmployeeRelationFilter, { nullable: true }),
    __metadata("design:type", employee_relation_filter_input_1.EmployeeRelationFilter)
], ContractWhereInput.prototype, "employee", void 0);
ContractWhereInput = ContractWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ContractWhereInput);
exports.ContractWhereInput = ContractWhereInput;
//# sourceMappingURL=contract-where.input.js.map