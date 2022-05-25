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
var NestedEnumDocumentTypeWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumDocumentTypeWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_type_enum_1 = require("./document-type.enum");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_document_type_filter_input_1 = require("./nested-enum-document-type-filter.input");
let NestedEnumDocumentTypeWithAggregatesFilter = NestedEnumDocumentTypeWithAggregatesFilter_1 = class NestedEnumDocumentTypeWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => document_type_enum_1.DocumentType, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumDocumentTypeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_type_enum_1.DocumentType], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumDocumentTypeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_type_enum_1.DocumentType], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumDocumentTypeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumDocumentTypeWithAggregatesFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumDocumentTypeWithAggregatesFilter)
], NestedEnumDocumentTypeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    __metadata("design:type", nested_int_filter_input_1.NestedIntFilter)
], NestedEnumDocumentTypeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_document_type_filter_input_1.NestedEnumDocumentTypeFilter, { nullable: true }),
    __metadata("design:type", nested_enum_document_type_filter_input_1.NestedEnumDocumentTypeFilter)
], NestedEnumDocumentTypeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_document_type_filter_input_1.NestedEnumDocumentTypeFilter, { nullable: true }),
    __metadata("design:type", nested_enum_document_type_filter_input_1.NestedEnumDocumentTypeFilter)
], NestedEnumDocumentTypeWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumDocumentTypeWithAggregatesFilter = NestedEnumDocumentTypeWithAggregatesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumDocumentTypeWithAggregatesFilter);
exports.NestedEnumDocumentTypeWithAggregatesFilter = NestedEnumDocumentTypeWithAggregatesFilter;
//# sourceMappingURL=nested-enum-document-type-with-aggregates-filter.input.js.map