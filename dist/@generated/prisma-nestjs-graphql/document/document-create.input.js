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
exports.DocumentCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_type_enum_1 = require("../prisma/document-type.enum");
const borrower_create_nested_one_without_documents_input_1 = require("../borrower/borrower-create-nested-one-without-documents.input");
const employee_create_nested_one_without_documents_input_1 = require("../employee/employee-create-nested-one-without-documents.input");
const aval_create_nested_one_without_documents_input_1 = require("../aval/aval-create-nested-one-without-documents.input");
const contract_create_nested_one_without_documents_input_1 = require("../contract/contract-create-nested-one-without-documents.input");
let DocumentCreateInput = class DocumentCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], DocumentCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_type_enum_1.DocumentType, { nullable: false }),
    __metadata("design:type", Object)
], DocumentCreateInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_create_nested_one_without_documents_input_1.BorrowerCreateNestedOneWithoutDocumentsInput, { nullable: true }),
    __metadata("design:type", borrower_create_nested_one_without_documents_input_1.BorrowerCreateNestedOneWithoutDocumentsInput)
], DocumentCreateInput.prototype, "borrower", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_nested_one_without_documents_input_1.EmployeeCreateNestedOneWithoutDocumentsInput, { nullable: true }),
    __metadata("design:type", employee_create_nested_one_without_documents_input_1.EmployeeCreateNestedOneWithoutDocumentsInput)
], DocumentCreateInput.prototype, "employee", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_create_nested_one_without_documents_input_1.AvalCreateNestedOneWithoutDocumentsInput, { nullable: true }),
    __metadata("design:type", aval_create_nested_one_without_documents_input_1.AvalCreateNestedOneWithoutDocumentsInput)
], DocumentCreateInput.prototype, "aval", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_nested_one_without_documents_input_1.ContractCreateNestedOneWithoutDocumentsInput, { nullable: true }),
    __metadata("design:type", contract_create_nested_one_without_documents_input_1.ContractCreateNestedOneWithoutDocumentsInput)
], DocumentCreateInput.prototype, "contract", void 0);
DocumentCreateInput = __decorate([
    (0, graphql_2.InputType)()
], DocumentCreateInput);
exports.DocumentCreateInput = DocumentCreateInput;
//# sourceMappingURL=document-create.input.js.map