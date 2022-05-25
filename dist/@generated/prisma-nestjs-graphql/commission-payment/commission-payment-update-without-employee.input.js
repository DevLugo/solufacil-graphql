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
exports.CommissionPaymentUpdateWithoutEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const decimal_field_update_operations_input_1 = require("../prisma/decimal-field-update-operations.input");
const payment_schedule_update_one_required_without_commission_payment_input_1 = require("../payment-schedule/payment-schedule-update-one-required-without-commission-payment.input");
const loan_update_one_without_commission_payment_input_1 = require("../loan/loan-update-one-without-commission-payment.input");
const enum_commission_payment_status_field_update_operations_input_1 = require("../prisma/enum-commission-payment-status-field-update-operations.input");
let CommissionPaymentUpdateWithoutEmployeeInput = class CommissionPaymentUpdateWithoutEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], CommissionPaymentUpdateWithoutEmployeeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput)
], CommissionPaymentUpdateWithoutEmployeeInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_update_one_required_without_commission_payment_input_1.PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput, { nullable: true }),
    __metadata("design:type", payment_schedule_update_one_required_without_commission_payment_input_1.PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput)
], CommissionPaymentUpdateWithoutEmployeeInput.prototype, "paymentSchedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_update_one_without_commission_payment_input_1.LoanUpdateOneWithoutCommissionPaymentInput, { nullable: true }),
    __metadata("design:type", loan_update_one_without_commission_payment_input_1.LoanUpdateOneWithoutCommissionPaymentInput)
], CommissionPaymentUpdateWithoutEmployeeInput.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_commission_payment_status_field_update_operations_input_1.EnumCommissionPaymentStatusFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_commission_payment_status_field_update_operations_input_1.EnumCommissionPaymentStatusFieldUpdateOperationsInput)
], CommissionPaymentUpdateWithoutEmployeeInput.prototype, "status", void 0);
CommissionPaymentUpdateWithoutEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], CommissionPaymentUpdateWithoutEmployeeInput);
exports.CommissionPaymentUpdateWithoutEmployeeInput = CommissionPaymentUpdateWithoutEmployeeInput;
//# sourceMappingURL=commission-payment-update-without-employee.input.js.map