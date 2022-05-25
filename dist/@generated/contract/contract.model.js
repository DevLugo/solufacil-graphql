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
exports.Contract = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const borrower_model_1 = require("../borrower/borrower.model");
const document_model_1 = require("../document/document.model");
const loan_model_1 = require("../loan/loan.model");
const contract_type_model_1 = require("../contract-type/contract-type.model");
const employee_model_1 = require("../employee/employee.model");
const contract_count_output_1 = require("./contract-count.output");
let Contract = class Contract {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", String)
], Contract.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_model_1.Borrower, { nullable: false }),
    __metadata("design:type", borrower_model_1.Borrower)
], Contract.prototype, "borrower", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Contract.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_model_1.Document], { nullable: true }),
    __metadata("design:type", Array)
], Contract.prototype, "documents", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_model_1.Loan], { nullable: true }),
    __metadata("design:type", Array)
], Contract.prototype, "loans", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Contract.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Contract.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Contract.prototype, "signDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Contract.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_model_1.ContractType, { nullable: false }),
    __metadata("design:type", contract_type_model_1.ContractType)
], Contract.prototype, "contractType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Contract.prototype, "contractTypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Contract.prototype, "loanLeadId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Contract.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_model_1.Employee, { nullable: true }),
    __metadata("design:type", employee_model_1.Employee)
], Contract.prototype, "loanLead", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_model_1.Employee, { nullable: false }),
    __metadata("design:type", employee_model_1.Employee)
], Contract.prototype, "employee", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_count_output_1.ContractCount, { nullable: false }),
    __metadata("design:type", contract_count_output_1.ContractCount)
], Contract.prototype, "_count", void 0);
Contract = __decorate([
    (0, graphql_2.ObjectType)()
], Contract);
exports.Contract = Contract;
//# sourceMappingURL=contract.model.js.map