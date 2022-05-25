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
exports.DocumentUpdateManyMutationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const enum_document_type_field_update_operations_input_1 = require("../prisma/enum-document-type-field-update-operations.input");
let DocumentUpdateManyMutationInput = class DocumentUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], DocumentUpdateManyMutationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_document_type_field_update_operations_input_1.EnumDocumentTypeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_document_type_field_update_operations_input_1.EnumDocumentTypeFieldUpdateOperationsInput)
], DocumentUpdateManyMutationInput.prototype, "type", void 0);
DocumentUpdateManyMutationInput = __decorate([
    (0, graphql_2.InputType)()
], DocumentUpdateManyMutationInput);
exports.DocumentUpdateManyMutationInput = DocumentUpdateManyMutationInput;
//# sourceMappingURL=document-update-many-mutation.input.js.map