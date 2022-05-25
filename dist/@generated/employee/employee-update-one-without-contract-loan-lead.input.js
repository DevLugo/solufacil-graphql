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
exports.EmployeeUpdateOneWithoutContractLoanLeadInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employee_create_without_contract_loan_lead_input_1 = require("./employee-create-without-contract-loan-lead.input");
const employee_create_or_connect_without_contract_loan_lead_input_1 = require("./employee-create-or-connect-without-contract-loan-lead.input");
const employee_upsert_without_contract_loan_lead_input_1 = require("./employee-upsert-without-contract-loan-lead.input");
const employee_where_unique_input_1 = require("./employee-where-unique.input");
const employee_update_without_contract_loan_lead_input_1 = require("./employee-update-without-contract-loan-lead.input");
let EmployeeUpdateOneWithoutContractLoanLeadInput = class EmployeeUpdateOneWithoutContractLoanLeadInput {
};
__decorate([
    (0, graphql_1.Field)(() => employee_create_without_contract_loan_lead_input_1.EmployeeCreateWithoutContractLoanLeadInput, { nullable: true }),
    __metadata("design:type", employee_create_without_contract_loan_lead_input_1.EmployeeCreateWithoutContractLoanLeadInput)
], EmployeeUpdateOneWithoutContractLoanLeadInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_or_connect_without_contract_loan_lead_input_1.EmployeeCreateOrConnectWithoutContractLoanLeadInput, { nullable: true }),
    __metadata("design:type", employee_create_or_connect_without_contract_loan_lead_input_1.EmployeeCreateOrConnectWithoutContractLoanLeadInput)
], EmployeeUpdateOneWithoutContractLoanLeadInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_upsert_without_contract_loan_lead_input_1.EmployeeUpsertWithoutContractLoanLeadInput, { nullable: true }),
    __metadata("design:type", employee_upsert_without_contract_loan_lead_input_1.EmployeeUpsertWithoutContractLoanLeadInput)
], EmployeeUpdateOneWithoutContractLoanLeadInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], EmployeeUpdateOneWithoutContractLoanLeadInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], EmployeeUpdateOneWithoutContractLoanLeadInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_where_unique_input_1.EmployeeWhereUniqueInput, { nullable: true }),
    __metadata("design:type", employee_where_unique_input_1.EmployeeWhereUniqueInput)
], EmployeeUpdateOneWithoutContractLoanLeadInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_update_without_contract_loan_lead_input_1.EmployeeUpdateWithoutContractLoanLeadInput, { nullable: true }),
    __metadata("design:type", employee_update_without_contract_loan_lead_input_1.EmployeeUpdateWithoutContractLoanLeadInput)
], EmployeeUpdateOneWithoutContractLoanLeadInput.prototype, "update", void 0);
EmployeeUpdateOneWithoutContractLoanLeadInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeUpdateOneWithoutContractLoanLeadInput);
exports.EmployeeUpdateOneWithoutContractLoanLeadInput = EmployeeUpdateOneWithoutContractLoanLeadInput;
//# sourceMappingURL=employee-update-one-without-contract-loan-lead.input.js.map