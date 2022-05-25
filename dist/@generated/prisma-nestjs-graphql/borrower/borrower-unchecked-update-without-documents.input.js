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
exports.BorrowerUncheckedUpdateWithoutDocumentsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const phone_unchecked_update_many_without_borrower_input_1 = require("../phone/phone-unchecked-update-many-without-borrower.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const graphql_3 = require("@nestjs/graphql");
const contract_unchecked_update_many_without_borrower_input_1 = require("../contract/contract-unchecked-update-many-without-borrower.input");
const local_unchecked_update_many_without_borrower_input_1 = require("../local/local-unchecked-update-many-without-borrower.input");
let BorrowerUncheckedUpdateWithoutDocumentsInput = class BorrowerUncheckedUpdateWithoutDocumentsInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], BorrowerUncheckedUpdateWithoutDocumentsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], BorrowerUncheckedUpdateWithoutDocumentsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], BorrowerUncheckedUpdateWithoutDocumentsInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], BorrowerUncheckedUpdateWithoutDocumentsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_unchecked_update_many_without_borrower_input_1.PhoneUncheckedUpdateManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", phone_unchecked_update_many_without_borrower_input_1.PhoneUncheckedUpdateManyWithoutBorrowerInput)
], BorrowerUncheckedUpdateWithoutDocumentsInput.prototype, "phones", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], BorrowerUncheckedUpdateWithoutDocumentsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], BorrowerUncheckedUpdateWithoutDocumentsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_unchecked_update_many_without_borrower_input_1.ContractUncheckedUpdateManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", contract_unchecked_update_many_without_borrower_input_1.ContractUncheckedUpdateManyWithoutBorrowerInput)
], BorrowerUncheckedUpdateWithoutDocumentsInput.prototype, "Contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_unchecked_update_many_without_borrower_input_1.LocalUncheckedUpdateManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", local_unchecked_update_many_without_borrower_input_1.LocalUncheckedUpdateManyWithoutBorrowerInput)
], BorrowerUncheckedUpdateWithoutDocumentsInput.prototype, "Local", void 0);
BorrowerUncheckedUpdateWithoutDocumentsInput = __decorate([
    (0, graphql_2.InputType)()
], BorrowerUncheckedUpdateWithoutDocumentsInput);
exports.BorrowerUncheckedUpdateWithoutDocumentsInput = BorrowerUncheckedUpdateWithoutDocumentsInput;
//# sourceMappingURL=borrower-unchecked-update-without-documents.input.js.map