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
exports.LoanPaymentUpdateWithoutEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const decimal_field_update_operations_input_1 = require("../prisma/decimal-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const graphql_3 = require("@nestjs/graphql");
const payment_schedule_update_many_without_loan_payments_input_1 = require("../payment-schedule/payment-schedule-update-many-without-loan-payments.input");
const loan_update_one_required_without_payments_input_1 = require("../loan/loan-update-one-required-without-payments.input");
let LoanPaymentUpdateWithoutEmployeeInput = class LoanPaymentUpdateWithoutEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], LoanPaymentUpdateWithoutEmployeeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput)
], LoanPaymentUpdateWithoutEmployeeInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], LoanPaymentUpdateWithoutEmployeeInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], LoanPaymentUpdateWithoutEmployeeInput.prototype, "comments", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], LoanPaymentUpdateWithoutEmployeeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], LoanPaymentUpdateWithoutEmployeeInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_update_many_without_loan_payments_input_1.PaymentScheduleUpdateManyWithoutLoanPaymentsInput, { nullable: true }),
    __metadata("design:type", payment_schedule_update_many_without_loan_payments_input_1.PaymentScheduleUpdateManyWithoutLoanPaymentsInput)
], LoanPaymentUpdateWithoutEmployeeInput.prototype, "paymentSchedules", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_update_one_required_without_payments_input_1.LoanUpdateOneRequiredWithoutPaymentsInput, { nullable: true }),
    __metadata("design:type", loan_update_one_required_without_payments_input_1.LoanUpdateOneRequiredWithoutPaymentsInput)
], LoanPaymentUpdateWithoutEmployeeInput.prototype, "loan", void 0);
LoanPaymentUpdateWithoutEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], LoanPaymentUpdateWithoutEmployeeInput);
exports.LoanPaymentUpdateWithoutEmployeeInput = LoanPaymentUpdateWithoutEmployeeInput;
//# sourceMappingURL=loan-payment-update-without-employee.input.js.map