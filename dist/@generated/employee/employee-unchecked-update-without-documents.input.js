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
exports.EmployeeUncheckedUpdateWithoutDocumentsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const enum_employees_types_field_update_operations_input_1 = require("../prisma/enum-employees-types-field-update-operations.input");
const phone_unchecked_update_many_without_employee_input_1 = require("../phone/phone-unchecked-update-many-without-employee.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const graphql_3 = require("@nestjs/graphql");
const loan_unchecked_update_many_without_employee_input_1 = require("../loan/loan-unchecked-update-many-without-employee.input");
const loan_payment_unchecked_update_many_without_employee_input_1 = require("../loan-payment/loan-payment-unchecked-update-many-without-employee.input");
const commission_payment_unchecked_update_many_without_employee_input_1 = require("../commission-payment/commission-payment-unchecked-update-many-without-employee.input");
const contract_unchecked_update_many_without_employee_input_1 = require("../contract/contract-unchecked-update-many-without-employee.input");
const contract_unchecked_update_many_without_loan_lead_input_1 = require("../contract/contract-unchecked-update-many-without-loan-lead.input");
const expenses_unchecked_update_many_without_employee_input_1 = require("../expenses/expenses-unchecked-update-many-without-employee.input");
let EmployeeUncheckedUpdateWithoutDocumentsInput = class EmployeeUncheckedUpdateWithoutDocumentsInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], EmployeeUncheckedUpdateWithoutDocumentsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_employees_types_field_update_operations_input_1.EnumEmployeesTypesFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_employees_types_field_update_operations_input_1.EnumEmployeesTypesFieldUpdateOperationsInput)
], EmployeeUncheckedUpdateWithoutDocumentsInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_unchecked_update_many_without_employee_input_1.PhoneUncheckedUpdateManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", phone_unchecked_update_many_without_employee_input_1.PhoneUncheckedUpdateManyWithoutEmployeeInput)
], EmployeeUncheckedUpdateWithoutDocumentsInput.prototype, "phones", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], EmployeeUncheckedUpdateWithoutDocumentsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], EmployeeUncheckedUpdateWithoutDocumentsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_unchecked_update_many_without_employee_input_1.LoanUncheckedUpdateManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", loan_unchecked_update_many_without_employee_input_1.LoanUncheckedUpdateManyWithoutEmployeeInput)
], EmployeeUncheckedUpdateWithoutDocumentsInput.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], EmployeeUncheckedUpdateWithoutDocumentsInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_unchecked_update_many_without_employee_input_1.LoanPaymentUncheckedUpdateManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", loan_payment_unchecked_update_many_without_employee_input_1.LoanPaymentUncheckedUpdateManyWithoutEmployeeInput)
], EmployeeUncheckedUpdateWithoutDocumentsInput.prototype, "loanPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_unchecked_update_many_without_employee_input_1.CommissionPaymentUncheckedUpdateManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", commission_payment_unchecked_update_many_without_employee_input_1.CommissionPaymentUncheckedUpdateManyWithoutEmployeeInput)
], EmployeeUncheckedUpdateWithoutDocumentsInput.prototype, "commissionPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_unchecked_update_many_without_employee_input_1.ContractUncheckedUpdateManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", contract_unchecked_update_many_without_employee_input_1.ContractUncheckedUpdateManyWithoutEmployeeInput)
], EmployeeUncheckedUpdateWithoutDocumentsInput.prototype, "contractEmployee", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_unchecked_update_many_without_loan_lead_input_1.ContractUncheckedUpdateManyWithoutLoanLeadInput, { nullable: true }),
    __metadata("design:type", contract_unchecked_update_many_without_loan_lead_input_1.ContractUncheckedUpdateManyWithoutLoanLeadInput)
], EmployeeUncheckedUpdateWithoutDocumentsInput.prototype, "contractLoanLead", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_unchecked_update_many_without_employee_input_1.ExpensesUncheckedUpdateManyWithoutEmployeeInput, { nullable: true }),
    __metadata("design:type", expenses_unchecked_update_many_without_employee_input_1.ExpensesUncheckedUpdateManyWithoutEmployeeInput)
], EmployeeUncheckedUpdateWithoutDocumentsInput.prototype, "Expenses", void 0);
EmployeeUncheckedUpdateWithoutDocumentsInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeUncheckedUpdateWithoutDocumentsInput);
exports.EmployeeUncheckedUpdateWithoutDocumentsInput = EmployeeUncheckedUpdateWithoutDocumentsInput;
//# sourceMappingURL=employee-unchecked-update-without-documents.input.js.map