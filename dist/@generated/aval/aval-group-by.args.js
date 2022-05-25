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
exports.AvalGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const aval_where_input_1 = require("./aval-where.input");
const aval_order_by_with_aggregation_input_1 = require("./aval-order-by-with-aggregation.input");
const aval_scalar_field_enum_1 = require("./aval-scalar-field.enum");
const aval_scalar_where_with_aggregates_input_1 = require("./aval-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const aval_count_aggregate_input_1 = require("./aval-count-aggregate.input");
const aval_min_aggregate_input_1 = require("./aval-min-aggregate.input");
const aval_max_aggregate_input_1 = require("./aval-max-aggregate.input");
let AvalGroupByArgs = class AvalGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => aval_where_input_1.AvalWhereInput, { nullable: true }),
    __metadata("design:type", aval_where_input_1.AvalWhereInput)
], AvalGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [aval_order_by_with_aggregation_input_1.AvalOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], AvalGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [aval_scalar_field_enum_1.AvalScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], AvalGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_scalar_where_with_aggregates_input_1.AvalScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", aval_scalar_where_with_aggregates_input_1.AvalScalarWhereWithAggregatesInput)
], AvalGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], AvalGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], AvalGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_count_aggregate_input_1.AvalCountAggregateInput, { nullable: true }),
    __metadata("design:type", aval_count_aggregate_input_1.AvalCountAggregateInput)
], AvalGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_min_aggregate_input_1.AvalMinAggregateInput, { nullable: true }),
    __metadata("design:type", aval_min_aggregate_input_1.AvalMinAggregateInput)
], AvalGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_max_aggregate_input_1.AvalMaxAggregateInput, { nullable: true }),
    __metadata("design:type", aval_max_aggregate_input_1.AvalMaxAggregateInput)
], AvalGroupByArgs.prototype, "_max", void 0);
AvalGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], AvalGroupByArgs);
exports.AvalGroupByArgs = AvalGroupByArgs;
//# sourceMappingURL=aval-group-by.args.js.map