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
var DocumentWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_document_type_filter_input_1 = require("../prisma/enum-document-type-filter.input");
const borrower_relation_filter_input_1 = require("../borrower/borrower-relation-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const employee_relation_filter_input_1 = require("../employee/employee-relation-filter.input");
const aval_relation_filter_input_1 = require("../aval/aval-relation-filter.input");
const contract_relation_filter_input_1 = require("../contract/contract-relation-filter.input");
let DocumentWhereInput = DocumentWhereInput_1 = class DocumentWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [DocumentWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], DocumentWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DocumentWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], DocumentWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DocumentWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], DocumentWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], DocumentWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_document_type_filter_input_1.EnumDocumentTypeFilter, { nullable: true }),
    __metadata("design:type", enum_document_type_filter_input_1.EnumDocumentTypeFilter)
], DocumentWhereInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_relation_filter_input_1.BorrowerRelationFilter, { nullable: true }),
    __metadata("design:type", borrower_relation_filter_input_1.BorrowerRelationFilter)
], DocumentWhereInput.prototype, "borrower", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], DocumentWhereInput.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_relation_filter_input_1.EmployeeRelationFilter, { nullable: true }),
    __metadata("design:type", employee_relation_filter_input_1.EmployeeRelationFilter)
], DocumentWhereInput.prototype, "employee", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_relation_filter_input_1.AvalRelationFilter, { nullable: true }),
    __metadata("design:type", aval_relation_filter_input_1.AvalRelationFilter)
], DocumentWhereInput.prototype, "aval", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], DocumentWhereInput.prototype, "avalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_relation_filter_input_1.ContractRelationFilter, { nullable: true }),
    __metadata("design:type", contract_relation_filter_input_1.ContractRelationFilter)
], DocumentWhereInput.prototype, "contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], DocumentWhereInput.prototype, "contractId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], DocumentWhereInput.prototype, "employeeId", void 0);
DocumentWhereInput = DocumentWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], DocumentWhereInput);
exports.DocumentWhereInput = DocumentWhereInput;
//# sourceMappingURL=document-where.input.js.map