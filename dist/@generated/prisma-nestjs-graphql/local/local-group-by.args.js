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
exports.LocalGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const local_where_input_1 = require("./local-where.input");
const local_order_by_with_aggregation_input_1 = require("./local-order-by-with-aggregation.input");
const local_scalar_field_enum_1 = require("./local-scalar-field.enum");
const local_scalar_where_with_aggregates_input_1 = require("./local-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const local_count_aggregate_input_1 = require("./local-count-aggregate.input");
const local_min_aggregate_input_1 = require("./local-min-aggregate.input");
const local_max_aggregate_input_1 = require("./local-max-aggregate.input");
let LocalGroupByArgs = class LocalGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => local_where_input_1.LocalWhereInput, { nullable: true }),
    __metadata("design:type", local_where_input_1.LocalWhereInput)
], LocalGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [local_order_by_with_aggregation_input_1.LocalOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], LocalGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [local_scalar_field_enum_1.LocalScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], LocalGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_scalar_where_with_aggregates_input_1.LocalScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", local_scalar_where_with_aggregates_input_1.LocalScalarWhereWithAggregatesInput)
], LocalGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LocalGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LocalGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_count_aggregate_input_1.LocalCountAggregateInput, { nullable: true }),
    __metadata("design:type", local_count_aggregate_input_1.LocalCountAggregateInput)
], LocalGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_min_aggregate_input_1.LocalMinAggregateInput, { nullable: true }),
    __metadata("design:type", local_min_aggregate_input_1.LocalMinAggregateInput)
], LocalGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_max_aggregate_input_1.LocalMaxAggregateInput, { nullable: true }),
    __metadata("design:type", local_max_aggregate_input_1.LocalMaxAggregateInput)
], LocalGroupByArgs.prototype, "_max", void 0);
LocalGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], LocalGroupByArgs);
exports.LocalGroupByArgs = LocalGroupByArgs;
//# sourceMappingURL=local-group-by.args.js.map