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
exports.LoantypeAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loantype_where_input_1 = require("./loantype-where.input");
const loantype_order_by_with_relation_input_1 = require("./loantype-order-by-with-relation.input");
const loantype_where_unique_input_1 = require("./loantype-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const loantype_count_aggregate_input_1 = require("./loantype-count-aggregate.input");
const loantype_avg_aggregate_input_1 = require("./loantype-avg-aggregate.input");
const loantype_sum_aggregate_input_1 = require("./loantype-sum-aggregate.input");
const loantype_min_aggregate_input_1 = require("./loantype-min-aggregate.input");
const loantype_max_aggregate_input_1 = require("./loantype-max-aggregate.input");
let LoantypeAggregateArgs = class LoantypeAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => loantype_where_input_1.LoantypeWhereInput, { nullable: true }),
    __metadata("design:type", loantype_where_input_1.LoantypeWhereInput)
], LoantypeAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loantype_order_by_with_relation_input_1.LoantypeOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], LoantypeAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_where_unique_input_1.LoantypeWhereUniqueInput, { nullable: true }),
    __metadata("design:type", loantype_where_unique_input_1.LoantypeWhereUniqueInput)
], LoantypeAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoantypeAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoantypeAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_count_aggregate_input_1.LoantypeCountAggregateInput, { nullable: true }),
    __metadata("design:type", loantype_count_aggregate_input_1.LoantypeCountAggregateInput)
], LoantypeAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_avg_aggregate_input_1.LoantypeAvgAggregateInput, { nullable: true }),
    __metadata("design:type", loantype_avg_aggregate_input_1.LoantypeAvgAggregateInput)
], LoantypeAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_sum_aggregate_input_1.LoantypeSumAggregateInput, { nullable: true }),
    __metadata("design:type", loantype_sum_aggregate_input_1.LoantypeSumAggregateInput)
], LoantypeAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_min_aggregate_input_1.LoantypeMinAggregateInput, { nullable: true }),
    __metadata("design:type", loantype_min_aggregate_input_1.LoantypeMinAggregateInput)
], LoantypeAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_max_aggregate_input_1.LoantypeMaxAggregateInput, { nullable: true }),
    __metadata("design:type", loantype_max_aggregate_input_1.LoantypeMaxAggregateInput)
], LoantypeAggregateArgs.prototype, "_max", void 0);
LoantypeAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], LoantypeAggregateArgs);
exports.LoantypeAggregateArgs = LoantypeAggregateArgs;
//# sourceMappingURL=loantype-aggregate.args.js.map