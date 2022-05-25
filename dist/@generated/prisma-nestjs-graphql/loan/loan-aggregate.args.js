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
exports.LoanAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_where_input_1 = require("./loan-where.input");
const loan_order_by_with_relation_input_1 = require("./loan-order-by-with-relation.input");
const loan_where_unique_input_1 = require("./loan-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const loan_count_aggregate_input_1 = require("./loan-count-aggregate.input");
const loan_avg_aggregate_input_1 = require("./loan-avg-aggregate.input");
const loan_sum_aggregate_input_1 = require("./loan-sum-aggregate.input");
const loan_min_aggregate_input_1 = require("./loan-min-aggregate.input");
const loan_max_aggregate_input_1 = require("./loan-max-aggregate.input");
let LoanAggregateArgs = class LoanAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => loan_where_input_1.LoanWhereInput, { nullable: true }),
    __metadata("design:type", loan_where_input_1.LoanWhereInput)
], LoanAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_order_by_with_relation_input_1.LoanOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_where_unique_input_1.LoanWhereUniqueInput, { nullable: true }),
    __metadata("design:type", loan_where_unique_input_1.LoanWhereUniqueInput)
], LoanAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoanAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LoanAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_count_aggregate_input_1.LoanCountAggregateInput, { nullable: true }),
    __metadata("design:type", loan_count_aggregate_input_1.LoanCountAggregateInput)
], LoanAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_avg_aggregate_input_1.LoanAvgAggregateInput, { nullable: true }),
    __metadata("design:type", loan_avg_aggregate_input_1.LoanAvgAggregateInput)
], LoanAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_sum_aggregate_input_1.LoanSumAggregateInput, { nullable: true }),
    __metadata("design:type", loan_sum_aggregate_input_1.LoanSumAggregateInput)
], LoanAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_min_aggregate_input_1.LoanMinAggregateInput, { nullable: true }),
    __metadata("design:type", loan_min_aggregate_input_1.LoanMinAggregateInput)
], LoanAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_max_aggregate_input_1.LoanMaxAggregateInput, { nullable: true }),
    __metadata("design:type", loan_max_aggregate_input_1.LoanMaxAggregateInput)
], LoanAggregateArgs.prototype, "_max", void 0);
LoanAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], LoanAggregateArgs);
exports.LoanAggregateArgs = LoanAggregateArgs;
//# sourceMappingURL=loan-aggregate.args.js.map