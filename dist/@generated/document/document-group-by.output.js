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
exports.DocumentGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_type_enum_1 = require("../prisma/document-type.enum");
const document_count_aggregate_output_1 = require("./document-count-aggregate.output");
const document_min_aggregate_output_1 = require("./document-min-aggregate.output");
const document_max_aggregate_output_1 = require("./document-max-aggregate.output");
let DocumentGroupBy = class DocumentGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DocumentGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_type_enum_1.DocumentType, { nullable: false }),
    __metadata("design:type", Object)
], DocumentGroupBy.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], DocumentGroupBy.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], DocumentGroupBy.prototype, "avalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], DocumentGroupBy.prototype, "contractId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], DocumentGroupBy.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_count_aggregate_output_1.DocumentCountAggregate, { nullable: true }),
    __metadata("design:type", document_count_aggregate_output_1.DocumentCountAggregate)
], DocumentGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_min_aggregate_output_1.DocumentMinAggregate, { nullable: true }),
    __metadata("design:type", document_min_aggregate_output_1.DocumentMinAggregate)
], DocumentGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_max_aggregate_output_1.DocumentMaxAggregate, { nullable: true }),
    __metadata("design:type", document_max_aggregate_output_1.DocumentMaxAggregate)
], DocumentGroupBy.prototype, "_max", void 0);
DocumentGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], DocumentGroupBy);
exports.DocumentGroupBy = DocumentGroupBy;
//# sourceMappingURL=document-group-by.output.js.map