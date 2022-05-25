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
var NestedEnumDocumentTypeFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumDocumentTypeFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_type_enum_1 = require("./document-type.enum");
let NestedEnumDocumentTypeFilter = NestedEnumDocumentTypeFilter_1 = class NestedEnumDocumentTypeFilter {
};
__decorate([
    (0, graphql_1.Field)(() => document_type_enum_1.DocumentType, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumDocumentTypeFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_type_enum_1.DocumentType], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumDocumentTypeFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_type_enum_1.DocumentType], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumDocumentTypeFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumDocumentTypeFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumDocumentTypeFilter)
], NestedEnumDocumentTypeFilter.prototype, "not", void 0);
NestedEnumDocumentTypeFilter = NestedEnumDocumentTypeFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumDocumentTypeFilter);
exports.NestedEnumDocumentTypeFilter = NestedEnumDocumentTypeFilter;
//# sourceMappingURL=nested-enum-document-type-filter.input.js.map