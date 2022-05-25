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
exports.LoantypeGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loantype_where_input_1 = require("./loantype-where.input");
const loantype_order_by_with_aggregation_input_1 = require("./loantype-order-by-with-aggregation.input");
const loantype_scalar_field_enum_1 = require("./loantype-scalar-field.enum");
const loantype_scalar_where_with_aggregates_input_1 = require("./loantype-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const loantype_count_aggregate_input_1 = require("./loantype-count-aggregate.input");
const loantype_avg_aggregate_input_1 = require("./loantype-avg-aggregate.input");
const loantype_sum_aggregate_input_1 = require("./loantype-sum-aggregate.input");
const loantype_min_aggregate_input_1 = require("./loantype-min-aggregate.input");
const loantype_max_aggregate_input_1 = require("./loantype-max-aggregate.input");
let LoantypeGroupByArgs = class LoantypeGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => loantype_where_input_1.LoantypeWhereInput, { nullable: true }),
    __metadata("design:type", loantype_where_input_1.LoantypeWhereInput)
], LoantypeGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loantype_order_by_with_aggregation_input_1.LoantypeOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], LoantypeGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loantype_scalar_field_enum_1.LoantypeScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], LoantypeGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_scalar_where_with_aggregates_input_1.LoantypeScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", loantype_scalar_where_with_aggregates_input_1.LoantypeScalarWhereWithAggregatesInput)
], LoantypeGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoantypeGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoantypeGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_count_aggregate_input_1.LoantypeCountAggregateInput, { nullable: true }),
    __metadata("design:type", loantype_count_aggregate_input_1.LoantypeCountAggregateInput)
], LoantypeGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_avg_aggregate_input_1.LoantypeAvgAggregateInput, { nullable: true }),
    __metadata("design:type", loantype_avg_aggregate_input_1.LoantypeAvgAggregateInput)
], LoantypeGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_sum_aggregate_input_1.LoantypeSumAggregateInput, { nullable: true }),
    __metadata("design:type", loantype_sum_aggregate_input_1.LoantypeSumAggregateInput)
], LoantypeGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_min_aggregate_input_1.LoantypeMinAggregateInput, { nullable: true }),
    __metadata("design:type", loantype_min_aggregate_input_1.LoantypeMinAggregateInput)
], LoantypeGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_max_aggregate_input_1.LoantypeMaxAggregateInput, { nullable: true }),
    __metadata("design:type", loantype_max_aggregate_input_1.LoantypeMaxAggregateInput)
], LoantypeGroupByArgs.prototype, "_max", void 0);
LoantypeGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], LoantypeGroupByArgs);
exports.LoantypeGroupByArgs = LoantypeGroupByArgs;
//# sourceMappingURL=loantype-group-by.args.js.map