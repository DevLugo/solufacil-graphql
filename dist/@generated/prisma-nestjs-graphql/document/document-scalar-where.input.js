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
var DocumentScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_document_type_filter_input_1 = require("../prisma/enum-document-type-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
let DocumentScalarWhereInput = DocumentScalarWhereInput_1 = class DocumentScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [DocumentScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], DocumentScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DocumentScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], DocumentScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DocumentScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], DocumentScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], DocumentScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_document_type_filter_input_1.EnumDocumentTypeFilter, { nullable: true }),
    __metadata("design:type", enum_document_type_filter_input_1.EnumDocumentTypeFilter)
], DocumentScalarWhereInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], DocumentScalarWhereInput.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], DocumentScalarWhereInput.prototype, "avalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], DocumentScalarWhereInput.prototype, "contractId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], DocumentScalarWhereInput.prototype, "employeeId", void 0);
DocumentScalarWhereInput = DocumentScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], DocumentScalarWhereInput);
exports.DocumentScalarWhereInput = DocumentScalarWhereInput;
//# sourceMappingURL=document-scalar-where.input.js.map