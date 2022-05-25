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
exports.PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const decimal_field_update_operations_input_1 = require("../prisma/decimal-field-update-operations.input");
const enum_payment_state_field_update_operations_input_1 = require("../prisma/enum-payment-state-field-update-operations.input");
const graphql_3 = require("@nestjs/graphql");
const bool_field_update_operations_input_1 = require("../prisma/bool-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const commission_payment_unchecked_update_many_without_payment_schedule_input_1 = require("../commission-payment/commission-payment-unchecked-update-many-without-payment-schedule.input");
let PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput = class PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput.prototype, "numeration", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput)
], PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput)
], PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput.prototype, "paidAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput)
], PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput.prototype, "returnToCapital", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput)
], PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput.prototype, "profit", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", enum_payment_state_field_update_operations_input_1.EnumPaymentStateFieldUpdateOperationsInput)
], PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput)
], PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput.prototype, "delayed", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput.prototype, "details", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_unchecked_update_many_without_payment_schedule_input_1.CommissionPaymentUncheckedUpdateManyWithoutPaymentScheduleInput, { nullable: true }),
    __metadata("design:type", commission_payment_unchecked_update_many_without_payment_schedule_input_1.CommissionPaymentUncheckedUpdateManyWithoutPaymentScheduleInput)
], PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput.prototype, "CommissionPayment", void 0);
PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput);
exports.PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput = PaymentScheduleUncheckedUpdateWithoutLoanPaymentsInput;
//# sourceMappingURL=payment-schedule-unchecked-update-without-loan-payments.input.js.map