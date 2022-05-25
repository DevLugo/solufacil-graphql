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
exports.BorrowerUncheckedUpdateWithoutPhonesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const document_unchecked_update_many_without_borrower_input_1 = require("../document/document-unchecked-update-many-without-borrower.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const graphql_3 = require("@nestjs/graphql");
const contract_unchecked_update_many_without_borrower_input_1 = require("../contract/contract-unchecked-update-many-without-borrower.input");
const local_unchecked_update_many_without_borrower_input_1 = require("../local/local-unchecked-update-many-without-borrower.input");
let BorrowerUncheckedUpdateWithoutPhonesInput = class BorrowerUncheckedUpdateWithoutPhonesInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], BorrowerUncheckedUpdateWithoutPhonesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], BorrowerUncheckedUpdateWithoutPhonesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], BorrowerUncheckedUpdateWithoutPhonesInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], BorrowerUncheckedUpdateWithoutPhonesInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_unchecked_update_many_without_borrower_input_1.DocumentUncheckedUpdateManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", document_unchecked_update_many_without_borrower_input_1.DocumentUncheckedUpdateManyWithoutBorrowerInput)
], BorrowerUncheckedUpdateWithoutPhonesInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], BorrowerUncheckedUpdateWithoutPhonesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], BorrowerUncheckedUpdateWithoutPhonesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_unchecked_update_many_without_borrower_input_1.ContractUncheckedUpdateManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", contract_unchecked_update_many_without_borrower_input_1.ContractUncheckedUpdateManyWithoutBorrowerInput)
], BorrowerUncheckedUpdateWithoutPhonesInput.prototype, "Contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_unchecked_update_many_without_borrower_input_1.LocalUncheckedUpdateManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", local_unchecked_update_many_without_borrower_input_1.LocalUncheckedUpdateManyWithoutBorrowerInput)
], BorrowerUncheckedUpdateWithoutPhonesInput.prototype, "Local", void 0);
BorrowerUncheckedUpdateWithoutPhonesInput = __decorate([
    (0, graphql_2.InputType)()
], BorrowerUncheckedUpdateWithoutPhonesInput);
exports.BorrowerUncheckedUpdateWithoutPhonesInput = BorrowerUncheckedUpdateWithoutPhonesInput;
//# sourceMappingURL=borrower-unchecked-update-without-phones.input.js.map