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
exports.DocumentAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_where_input_1 = require("./document-where.input");
const document_order_by_with_relation_input_1 = require("./document-order-by-with-relation.input");
const document_where_unique_input_1 = require("./document-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const document_count_aggregate_input_1 = require("./document-count-aggregate.input");
const document_min_aggregate_input_1 = require("./document-min-aggregate.input");
const document_max_aggregate_input_1 = require("./document-max-aggregate.input");
let DocumentAggregateArgs = class DocumentAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => document_where_input_1.DocumentWhereInput, { nullable: true }),
    __metadata("design:type", document_where_input_1.DocumentWhereInput)
], DocumentAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_order_by_with_relation_input_1.DocumentOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_where_unique_input_1.DocumentWhereUniqueInput, { nullable: true }),
    __metadata("design:type", document_where_unique_input_1.DocumentWhereUniqueInput)
], DocumentAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], DocumentAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], DocumentAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_count_aggregate_input_1.DocumentCountAggregateInput, { nullable: true }),
    __metadata("design:type", document_count_aggregate_input_1.DocumentCountAggregateInput)
], DocumentAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_min_aggregate_input_1.DocumentMinAggregateInput, { nullable: true }),
    __metadata("design:type", document_min_aggregate_input_1.DocumentMinAggregateInput)
], DocumentAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_max_aggregate_input_1.DocumentMaxAggregateInput, { nullable: true }),
    __metadata("design:type", document_max_aggregate_input_1.DocumentMaxAggregateInput)
], DocumentAggregateArgs.prototype, "_max", void 0);
DocumentAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DocumentAggregateArgs);
exports.DocumentAggregateArgs = DocumentAggregateArgs;
//# sourceMappingURL=document-aggregate.args.js.map