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
exports.LoanUpdateWithoutPaymentScheduleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const enum_loan_state_field_update_operations_input_1 = require("../prisma/enum-loan-state-field-update-operations.input");
const graphql_3 = require("@nestjs/graphql");
const loan_payment_update_many_without_loan_input_1 = require("../loan-payment/loan-payment-update-many-without-loan.input");
const decimal_field_update_operations_input_1 = require("../prisma/decimal-field-update-operations.input");
const loantype_update_one_required_without_loan_input_1 = require("../loantype/loantype-update-one-required-without-loan.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const employee_update_one_required_without_loan_input_1 = require("../employee/employee-update-one-required-without-loan.input");
const contract_update_one_required_without_loans_input_1 = require("../contract/contract-update-one-required-without-loans.input");
const commission_payment_update_many_without_loan_input_1 = require("../commission-payment/commission-payment-update-many-without-loan.input");
let LoanUpdateWithoutPaymentScheduleInput = class LoanUpdateWithoutPaymentScheduleInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], LoanUpdateWithoutPaymentScheduleInput.prototype, "id", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", enum_loan_state_field_update_operations_input_1.EnumLoanStateFieldUpdateOperationsInput)
], LoanUpdateWithoutPaymentScheduleInput.prototype, "status", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", loan_payment_update_many_without_loan_input_1.LoanPaymentUpdateManyWithoutLoanInput)
], LoanUpdateWithoutPaymentScheduleInput.prototype, "payments", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput)
], LoanUpdateWithoutPaymentScheduleInput.prototype, "weeklyPaymentAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput)
], LoanUpdateWithoutPaymentScheduleInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_update_one_required_without_loan_input_1.LoantypeUpdateOneRequiredWithoutLoanInput, { nullable: true }),
    __metadata("design:type", loantype_update_one_required_without_loan_input_1.LoantypeUpdateOneRequiredWithoutLoanInput)
], LoanUpdateWithoutPaymentScheduleInput.prototype, "loanType", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], LoanUpdateWithoutPaymentScheduleInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], LoanUpdateWithoutPaymentScheduleInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_update_one_required_without_loan_input_1.EmployeeUpdateOneRequiredWithoutLoanInput, { nullable: true }),
    __metadata("design:type", employee_update_one_required_without_loan_input_1.EmployeeUpdateOneRequiredWithoutLoanInput)
], LoanUpdateWithoutPaymentScheduleInput.prototype, "employee", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], LoanUpdateWithoutPaymentScheduleInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_update_one_required_without_loans_input_1.ContractUpdateOneRequiredWithoutLoansInput, { nullable: true }),
    __metadata("design:type", contract_update_one_required_without_loans_input_1.ContractUpdateOneRequiredWithoutLoansInput)
], LoanUpdateWithoutPaymentScheduleInput.prototype, "contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_update_many_without_loan_input_1.CommissionPaymentUpdateManyWithoutLoanInput, { nullable: true }),
    __metadata("design:type", commission_payment_update_many_without_loan_input_1.CommissionPaymentUpdateManyWithoutLoanInput)
], LoanUpdateWithoutPaymentScheduleInput.prototype, "CommissionPayment", void 0);
LoanUpdateWithoutPaymentScheduleInput = __decorate([
    (0, graphql_2.InputType)()
], LoanUpdateWithoutPaymentScheduleInput);
exports.LoanUpdateWithoutPaymentScheduleInput = LoanUpdateWithoutPaymentScheduleInput;
//# sourceMappingURL=loan-update-without-payment-schedule.input.js.map