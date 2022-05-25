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
exports.EmployeeUpdateWithoutContractEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const enum_employees_types_field_update_operations_input_1 = require("../prisma/enum-employees-types-field-update-operations.input");
const phone_update_many_without_employee_input_1 = require("../phone/phone-update-many-without-employee.input");
const document_update_many_without_employee_input_1 = require("../document/document-update-many-without-employee.input");
const user_update_one_required_without_employee_input_1 = require("../user/user-update-one-required-without-employee.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const graphql_3 = require("@nestjs/graphql");
const loan_update_many_without_employee_input_1 = require("../loan/loan-update-many-without-employee.input");
const loan_payment_update_many_without_employee_input_1 = require("../loan-payment/loan-payment-update-many-without-employee.input");
const commission_payment_update_many_without_employee_input_1 = require("../commission-payment/commission-payment-update-many-without-employee.input");
const contract_update_many_without_loan_lead_input_1 = require("../contract/contract-update-many-without-loan-lead.input");
const expenses_update_many_without_employee_input_1 = require("../expenses/expenses-update-many-without-employee.input");
let EmployeeUpdateWithoutContractEmployeeInput = class EmployeeUpdateWithoutContractEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], EmployeeUpdateWithoutContractEmployeeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_employees_types_field_update_operations_input_1.EnumEmployeesTypesFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_employees_types_field_update_operations_input_1.EnumEmployeesTypesFieldUpdateOperationsInput)
], EmployeeUpdateWithoutContractEmployeeInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_update_many_without_employee_input_1.PhoneUpdateManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", phone_update_many_without_employee_input_1.PhoneUpdateManyWithoutEmployeeInput)
], EmployeeUpdateWithoutContractEmployeeInput.prototype, "phones", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_update_many_without_employee_input_1.DocumentUpdateManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", document_update_many_without_employee_input_1.DocumentUpdateManyWithoutEmployeeInput)
], EmployeeUpdateWithoutContractEmployeeInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_employee_input_1.UserUpdateOneRequiredWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", user_update_one_required_without_employee_input_1.UserUpdateOneRequiredWithoutEmployeeInput)
], EmployeeUpdateWithoutContractEmployeeInput.prototype, "user", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], EmployeeUpdateWithoutContractEmployeeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], EmployeeUpdateWithoutContractEmployeeInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_update_many_without_employee_input_1.LoanUpdateManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", loan_update_many_without_employee_input_1.LoanUpdateManyWithoutEmployeeInput)
], EmployeeUpdateWithoutContractEmployeeInput.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_update_many_without_employee_input_1.LoanPaymentUpdateManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", loan_payment_update_many_without_employee_input_1.LoanPaymentUpdateManyWithoutEmployeeInput)
], EmployeeUpdateWithoutContractEmployeeInput.prototype, "loanPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_update_many_without_employee_input_1.CommissionPaymentUpdateManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", commission_payment_update_many_without_employee_input_1.CommissionPaymentUpdateManyWithoutEmployeeInput)
], EmployeeUpdateWithoutContractEmployeeInput.prototype, "commissionPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_update_many_without_loan_lead_input_1.ContractUpdateManyWithoutLoanLeadInput, { nullable: true }),
    __metadata("design:type", contract_update_many_without_loan_lead_input_1.ContractUpdateManyWithoutLoanLeadInput)
], EmployeeUpdateWithoutContractEmployeeInput.prototype, "contractLoanLead", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_update_many_without_employee_input_1.ExpensesUpdateManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", expenses_update_many_without_employee_input_1.ExpensesUpdateManyWithoutEmployeeInput)
], EmployeeUpdateWithoutContractEmployeeInput.prototype, "Expenses", void 0);
EmployeeUpdateWithoutContractEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeUpdateWithoutContractEmployeeInput);
exports.EmployeeUpdateWithoutContractEmployeeInput = EmployeeUpdateWithoutContractEmployeeInput;
//# sourceMappingURL=employee-update-without-contract-employee.input.js.map