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
exports.CommissionPaymentUncheckedUpdateManyWithoutCommissionPaymentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const decimal_field_update_operations_input_1 = require("../prisma/decimal-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const enum_commission_payment_status_field_update_operations_input_1 = require("../prisma/enum-commission-payment-status-field-update-operations.input");
let CommissionPaymentUncheckedUpdateManyWithoutCommissionPaymentInput = class CommissionPaymentUncheckedUpdateManyWithoutCommissionPaymentInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], CommissionPaymentUncheckedUpdateManyWithoutCommissionPaymentInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput)
], CommissionPaymentUncheckedUpdateManyWithoutCommissionPaymentInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], CommissionPaymentUncheckedUpdateManyWithoutCommissionPaymentInput.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], CommissionPaymentUncheckedUpdateManyWithoutCommissionPaymentInput.prototype, "paymentScheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_commission_payment_status_field_update_operations_input_1.EnumCommissionPaymentStatusFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_commission_payment_status_field_update_operations_input_1.EnumCommissionPaymentStatusFieldUpdateOperationsInput)
], CommissionPaymentUncheckedUpdateManyWithoutCommissionPaymentInput.prototype, "status", void 0);
CommissionPaymentUncheckedUpdateManyWithoutCommissionPaymentInput = __decorate([
    (0, graphql_2.InputType)()
], CommissionPaymentUncheckedUpdateManyWithoutCommissionPaymentInput);
exports.CommissionPaymentUncheckedUpdateManyWithoutCommissionPaymentInput = CommissionPaymentUncheckedUpdateManyWithoutCommissionPaymentInput;
//# sourceMappingURL=commission-payment-unchecked-update-many-without-commission-payment.input.js.map