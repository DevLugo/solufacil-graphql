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
exports.PaymentScheduleUpdateWithoutLoanInput = void 0;
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
const loan_payment_update_many_without_payment_schedules_input_1 = require("../loan-payment/loan-payment-update-many-without-payment-schedules.input");
const commission_payment_update_many_without_payment_schedule_input_1 = require("../commission-payment/commission-payment-update-many-without-payment-schedule.input");
let PaymentScheduleUpdateWithoutLoanInput = class PaymentScheduleUpdateWithoutLoanInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], PaymentScheduleUpdateWithoutLoanInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], PaymentScheduleUpdateWithoutLoanInput.prototype, "numeration", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput)
], PaymentScheduleUpdateWithoutLoanInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput)
], PaymentScheduleUpdateWithoutLoanInput.prototype, "paidAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput)
], PaymentScheduleUpdateWithoutLoanInput.prototype, "returnToCapital", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput)
], PaymentScheduleUpdateWithoutLoanInput.prototype, "profit", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", enum_payment_state_field_update_operations_input_1.EnumPaymentStateFieldUpdateOperationsInput)
], PaymentScheduleUpdateWithoutLoanInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput)
], PaymentScheduleUpdateWithoutLoanInput.prototype, "delayed", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], PaymentScheduleUpdateWithoutLoanInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], PaymentScheduleUpdateWithoutLoanInput.prototype, "details", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], PaymentScheduleUpdateWithoutLoanInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], PaymentScheduleUpdateWithoutLoanInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_update_many_without_payment_schedules_input_1.LoanPaymentUpdateManyWithoutPaymentSchedulesInput, { nullable: true }),
    __metadata("design:type", loan_payment_update_many_without_payment_schedules_input_1.LoanPaymentUpdateManyWithoutPaymentSchedulesInput)
], PaymentScheduleUpdateWithoutLoanInput.prototype, "loanPayments", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_update_many_without_payment_schedule_input_1.CommissionPaymentUpdateManyWithoutPaymentScheduleInput, { nullable: true }),
    __metadata("design:type", commission_payment_update_many_without_payment_schedule_input_1.CommissionPaymentUpdateManyWithoutPaymentScheduleInput)
], PaymentScheduleUpdateWithoutLoanInput.prototype, "CommissionPayment", void 0);
PaymentScheduleUpdateWithoutLoanInput = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleUpdateWithoutLoanInput);
exports.PaymentScheduleUpdateWithoutLoanInput = PaymentScheduleUpdateWithoutLoanInput;
//# sourceMappingURL=payment-schedule-update-without-loan.input.js.map