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
exports.LoantypeGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const loantype_count_aggregate_output_1 = require("./loantype-count-aggregate.output");
const loantype_avg_aggregate_output_1 = require("./loantype-avg-aggregate.output");
const loantype_sum_aggregate_output_1 = require("./loantype-sum-aggregate.output");
const loantype_min_aggregate_output_1 = require("./loantype-min-aggregate.output");
const loantype_max_aggregate_output_1 = require("./loantype-max-aggregate.output");
let LoantypeGroupBy = class LoantypeGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LoantypeGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LoantypeGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], LoantypeGroupBy.prototype, "weekDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: false }),
    __metadata("design:type", Number)
], LoantypeGroupBy.prototype, "rate", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: false }),
    __metadata("design:type", Number)
], LoantypeGroupBy.prototype, "overdueRate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], LoantypeGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], LoantypeGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_count_aggregate_output_1.LoantypeCountAggregate, { nullable: true }),
    __metadata("design:type", loantype_count_aggregate_output_1.LoantypeCountAggregate)
], LoantypeGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_avg_aggregate_output_1.LoantypeAvgAggregate, { nullable: true }),
    __metadata("design:type", loantype_avg_aggregate_output_1.LoantypeAvgAggregate)
], LoantypeGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_sum_aggregate_output_1.LoantypeSumAggregate, { nullable: true }),
    __metadata("design:type", loantype_sum_aggregate_output_1.LoantypeSumAggregate)
], LoantypeGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_min_aggregate_output_1.LoantypeMinAggregate, { nullable: true }),
    __metadata("design:type", loantype_min_aggregate_output_1.LoantypeMinAggregate)
], LoantypeGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_max_aggregate_output_1.LoantypeMaxAggregate, { nullable: true }),
    __metadata("design:type", loantype_max_aggregate_output_1.LoantypeMaxAggregate)
], LoantypeGroupBy.prototype, "_max", void 0);
LoantypeGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], LoantypeGroupBy);
exports.LoantypeGroupBy = LoantypeGroupBy;
//# sourceMappingURL=loantype-group-by.output.js.map