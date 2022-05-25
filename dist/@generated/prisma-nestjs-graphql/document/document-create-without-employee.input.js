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
exports.DocumentCreateWithoutEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_type_enum_1 = require("../prisma/document-type.enum");
const borrower_create_nested_one_without_documents_input_1 = require("../borrower/borrower-create-nested-one-without-documents.input");
const aval_create_nested_one_without_documents_input_1 = require("../aval/aval-create-nested-one-without-documents.input");
const contract_create_nested_one_without_documents_input_1 = require("../contract/contract-create-nested-one-without-documents.input");
let DocumentCreateWithoutEmployeeInput = class DocumentCreateWithoutEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], DocumentCreateWithoutEmployeeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_type_enum_1.DocumentType, { nullable: false }),
    __metadata("design:type", Object)
], DocumentCreateWithoutEmployeeInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_create_nested_one_without_documents_input_1.BorrowerCreateNestedOneWithoutDocumentsInput, { nullable: true }),
    __metadata("design:type", borrower_create_nested_one_without_documents_input_1.BorrowerCreateNestedOneWithoutDocumentsInput)
], DocumentCreateWithoutEmployeeInput.prototype, "borrower", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_create_nested_one_without_documents_input_1.AvalCreateNestedOneWithoutDocumentsInput, { nullable: true }),
    __metadata("design:type", aval_create_nested_one_without_documents_input_1.AvalCreateNestedOneWithoutDocumentsInput)
], DocumentCreateWithoutEmployeeInput.prototype, "aval", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_nested_one_without_documents_input_1.ContractCreateNestedOneWithoutDocumentsInput, { nullable: true }),
    __metadata("design:type", contract_create_nested_one_without_documents_input_1.ContractCreateNestedOneWithoutDocumentsInput)
], DocumentCreateWithoutEmployeeInput.prototype, "contract", void 0);
DocumentCreateWithoutEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], DocumentCreateWithoutEmployeeInput);
exports.DocumentCreateWithoutEmployeeInput = DocumentCreateWithoutEmployeeInput;
//# sourceMappingURL=document-create-without-employee.input.js.map