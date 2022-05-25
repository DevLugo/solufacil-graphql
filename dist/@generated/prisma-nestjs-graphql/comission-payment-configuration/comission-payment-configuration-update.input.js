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
exports.ComissionPaymentConfigurationUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const enum_employees_types_field_update_operations_input_1 = require("../prisma/enum-employees-types-field-update-operations.input");
const loantype_update_one_required_without_comission_payment_configuration_input_1 = require("../loantype/loantype-update-one-required-without-comission-payment-configuration.input");
const enum_commission_goal_type_field_update_operations_input_1 = require("../prisma/enum-commission-goal-type-field-update-operations.input");
const enum_commission_type_field_update_operations_input_1 = require("../prisma/enum-commission-type-field-update-operations.input");
let ComissionPaymentConfigurationUpdateInput = class ComissionPaymentConfigurationUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ComissionPaymentConfigurationUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_employees_types_field_update_operations_input_1.EnumEmployeesTypesFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_employees_types_field_update_operations_input_1.EnumEmployeesTypesFieldUpdateOperationsInput)
], ComissionPaymentConfigurationUpdateInput.prototype, "employeeType", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_update_one_required_without_comission_payment_configuration_input_1.LoantypeUpdateOneRequiredWithoutComissionPaymentConfigurationInput, { nullable: true }),
    __metadata("design:type", loantype_update_one_required_without_comission_payment_configuration_input_1.LoantypeUpdateOneRequiredWithoutComissionPaymentConfigurationInput)
], ComissionPaymentConfigurationUpdateInput.prototype, "loanType", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_commission_goal_type_field_update_operations_input_1.EnumCommissionGoalTypeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_commission_goal_type_field_update_operations_input_1.EnumCommissionGoalTypeFieldUpdateOperationsInput)
], ComissionPaymentConfigurationUpdateInput.prototype, "commissionGoalType", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_commission_type_field_update_operations_input_1.EnumCommissionTypeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_commission_type_field_update_operations_input_1.EnumCommissionTypeFieldUpdateOperationsInput)
], ComissionPaymentConfigurationUpdateInput.prototype, "commissionType", void 0);
ComissionPaymentConfigurationUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], ComissionPaymentConfigurationUpdateInput);
exports.ComissionPaymentConfigurationUpdateInput = ComissionPaymentConfigurationUpdateInput;
//# sourceMappingURL=comission-payment-configuration-update.input.js.map