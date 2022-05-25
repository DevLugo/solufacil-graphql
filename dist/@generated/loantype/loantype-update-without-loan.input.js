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
exports.LoantypeUpdateWithoutLoanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const float_field_update_operations_input_1 = require("../prisma/float-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const comission_payment_configuration_update_many_without_loan_type_input_1 = require("../comission-payment-configuration/comission-payment-configuration-update-many-without-loan-type.input");
let LoantypeUpdateWithoutLoanInput = class LoantypeUpdateWithoutLoanInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], LoantypeUpdateWithoutLoanInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], LoantypeUpdateWithoutLoanInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], LoantypeUpdateWithoutLoanInput.prototype, "weekDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => float_field_update_operations_input_1.FloatFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", float_field_update_operations_input_1.FloatFieldUpdateOperationsInput)
], LoantypeUpdateWithoutLoanInput.prototype, "rate", void 0);
__decorate([
    (0, graphql_1.Field)(() => float_field_update_operations_input_1.FloatFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", float_field_update_operations_input_1.FloatFieldUpdateOperationsInput)
], LoantypeUpdateWithoutLoanInput.prototype, "overdueRate", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], LoantypeUpdateWithoutLoanInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], LoantypeUpdateWithoutLoanInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_update_many_without_loan_type_input_1.ComissionPaymentConfigurationUpdateManyWithoutLoanTypeInput, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_update_many_without_loan_type_input_1.ComissionPaymentConfigurationUpdateManyWithoutLoanTypeInput)
], LoantypeUpdateWithoutLoanInput.prototype, "ComissionPaymentConfiguration", void 0);
LoantypeUpdateWithoutLoanInput = __decorate([
    (0, graphql_2.InputType)()
], LoantypeUpdateWithoutLoanInput);
exports.LoantypeUpdateWithoutLoanInput = LoantypeUpdateWithoutLoanInput;
//# sourceMappingURL=loantype-update-without-loan.input.js.map