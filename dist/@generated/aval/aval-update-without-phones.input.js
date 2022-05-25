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
exports.AvalUpdateWithoutPhonesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const graphql_3 = require("@nestjs/graphql");
const document_update_many_without_aval_input_1 = require("../document/document-update-many-without-aval.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
let AvalUpdateWithoutPhonesInput = class AvalUpdateWithoutPhonesInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], AvalUpdateWithoutPhonesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], AvalUpdateWithoutPhonesInput.prototype, "email", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], AvalUpdateWithoutPhonesInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], AvalUpdateWithoutPhonesInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], AvalUpdateWithoutPhonesInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_update_many_without_aval_input_1.DocumentUpdateManyWithoutAvalInput, { nullable: true }),
    __metadata("design:type", document_update_many_without_aval_input_1.DocumentUpdateManyWithoutAvalInput)
], AvalUpdateWithoutPhonesInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], AvalUpdateWithoutPhonesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], AvalUpdateWithoutPhonesInput.prototype, "updatedAt", void 0);
AvalUpdateWithoutPhonesInput = __decorate([
    (0, graphql_2.InputType)()
], AvalUpdateWithoutPhonesInput);
exports.AvalUpdateWithoutPhonesInput = AvalUpdateWithoutPhonesInput;
//# sourceMappingURL=aval-update-without-phones.input.js.map