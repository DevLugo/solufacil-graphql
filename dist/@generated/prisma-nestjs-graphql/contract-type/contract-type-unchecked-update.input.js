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
exports.ContractTypeUncheckedUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const decimal_field_update_operations_input_1 = require("../prisma/decimal-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const graphql_3 = require("@nestjs/graphql");
const nullable_date_time_field_update_operations_input_1 = require("../prisma/nullable-date-time-field-update-operations.input");
const contract_unchecked_update_many_without_contract_type_input_1 = require("../contract/contract-unchecked-update-many-without-contract-type.input");
let ContractTypeUncheckedUpdateInput = class ContractTypeUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ContractTypeUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ContractTypeUncheckedUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", int_field_update_operations_input_1.IntFieldUpdateOperationsInput)
], ContractTypeUncheckedUpdateInput.prototype, "monthDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput)
], ContractTypeUncheckedUpdateInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput)
], ContractTypeUncheckedUpdateInput.prototype, "maxRate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ContractTypeUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", nullable_date_time_field_update_operations_input_1.NullableDateTimeFieldUpdateOperationsInput)
], ContractTypeUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_unchecked_update_many_without_contract_type_input_1.ContractUncheckedUpdateManyWithoutContractTypeInput, { nullable: true }),
    __metadata("design:type", contract_unchecked_update_many_without_contract_type_input_1.ContractUncheckedUpdateManyWithoutContractTypeInput)
], ContractTypeUncheckedUpdateInput.prototype, "contract", void 0);
ContractTypeUncheckedUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], ContractTypeUncheckedUpdateInput);
exports.ContractTypeUncheckedUpdateInput = ContractTypeUncheckedUpdateInput;
//# sourceMappingURL=contract-type-unchecked-update.input.js.map