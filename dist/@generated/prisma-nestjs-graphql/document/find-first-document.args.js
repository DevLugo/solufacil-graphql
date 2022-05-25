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
exports.FindFirstDocumentArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_where_input_1 = require("./document-where.input");
const document_order_by_with_relation_input_1 = require("./document-order-by-with-relation.input");
const document_where_unique_input_1 = require("./document-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const document_scalar_field_enum_1 = require("./document-scalar-field.enum");
let FindFirstDocumentArgs = class FindFirstDocumentArgs {
};
__decorate([
    (0, graphql_1.Field)(() => document_where_input_1.DocumentWhereInput, { nullable: true }),
    __metadata("design:type", document_where_input_1.DocumentWhereInput)
], FindFirstDocumentArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_order_by_with_relation_input_1.DocumentOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstDocumentArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_where_unique_input_1.DocumentWhereUniqueInput, { nullable: true }),
    __metadata("design:type", document_where_unique_input_1.DocumentWhereUniqueInput)
], FindFirstDocumentArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstDocumentArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstDocumentArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_scalar_field_enum_1.DocumentScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstDocumentArgs.prototype, "distinct", void 0);
FindFirstDocumentArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstDocumentArgs);
exports.FindFirstDocumentArgs = FindFirstDocumentArgs;
//# sourceMappingURL=find-first-document.args.js.map