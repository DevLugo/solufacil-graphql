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
exports.DocumentGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_where_input_1 = require("./document-where.input");
const document_order_by_with_aggregation_input_1 = require("./document-order-by-with-aggregation.input");
const document_scalar_field_enum_1 = require("./document-scalar-field.enum");
const document_scalar_where_with_aggregates_input_1 = require("./document-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const document_count_aggregate_input_1 = require("./document-count-aggregate.input");
const document_min_aggregate_input_1 = require("./document-min-aggregate.input");
const document_max_aggregate_input_1 = require("./document-max-aggregate.input");
let DocumentGroupByArgs = class DocumentGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => document_where_input_1.DocumentWhereInput, { nullable: true }),
    __metadata("design:type", document_where_input_1.DocumentWhereInput)
], DocumentGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_order_by_with_aggregation_input_1.DocumentOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_scalar_field_enum_1.DocumentScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], DocumentGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_scalar_where_with_aggregates_input_1.DocumentScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", document_scalar_where_with_aggregates_input_1.DocumentScalarWhereWithAggregatesInput)
], DocumentGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], DocumentGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], DocumentGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_count_aggregate_input_1.DocumentCountAggregateInput, { nullable: true }),
    __metadata("design:type", document_count_aggregate_input_1.DocumentCountAggregateInput)
], DocumentGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_min_aggregate_input_1.DocumentMinAggregateInput, { nullable: true }),
    __metadata("design:type", document_min_aggregate_input_1.DocumentMinAggregateInput)
], DocumentGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_max_aggregate_input_1.DocumentMaxAggregateInput, { nullable: true }),
    __metadata("design:type", document_max_aggregate_input_1.DocumentMaxAggregateInput)
], DocumentGroupByArgs.prototype, "_max", void 0);
DocumentGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DocumentGroupByArgs);
exports.DocumentGroupByArgs = DocumentGroupByArgs;
//# sourceMappingURL=document-group-by.args.js.map