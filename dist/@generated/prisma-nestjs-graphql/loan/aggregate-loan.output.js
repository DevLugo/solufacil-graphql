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
exports.AggregateLoan = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_count_aggregate_output_1 = require("./loan-count-aggregate.output");
const loan_avg_aggregate_output_1 = require("./loan-avg-aggregate.output");
const loan_sum_aggregate_output_1 = require("./loan-sum-aggregate.output");
const loan_min_aggregate_output_1 = require("./loan-min-aggregate.output");
const loan_max_aggregate_output_1 = require("./loan-max-aggregate.output");
let AggregateLoan = class AggregateLoan {
};
__decorate([
    (0, graphql_1.Field)(() => loan_count_aggregate_output_1.LoanCountAggregate, { nullable: true }),
    __metadata("design:type", loan_count_aggregate_output_1.LoanCountAggregate)
], AggregateLoan.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_avg_aggregate_output_1.LoanAvgAggregate, { nullable: true }),
    __metadata("design:type", loan_avg_aggregate_output_1.LoanAvgAggregate)
], AggregateLoan.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_sum_aggregate_output_1.LoanSumAggregate, { nullable: true }),
    __metadata("design:type", loan_sum_aggregate_output_1.LoanSumAggregate)
], AggregateLoan.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_min_aggregate_output_1.LoanMinAggregate, { nullable: true }),
    __metadata("design:type", loan_min_aggregate_output_1.LoanMinAggregate)
], AggregateLoan.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_max_aggregate_output_1.LoanMaxAggregate, { nullable: true }),
    __metadata("design:type", loan_max_aggregate_output_1.LoanMaxAggregate)
], AggregateLoan.prototype, "_max", void 0);
AggregateLoan = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateLoan);
exports.AggregateLoan = AggregateLoan;
//# sourceMappingURL=aggregate-loan.output.js.map