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
exports.LoantypeOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const loantype_count_order_by_aggregate_input_1 = require("./loantype-count-order-by-aggregate.input");
const loantype_avg_order_by_aggregate_input_1 = require("./loantype-avg-order-by-aggregate.input");
const loantype_max_order_by_aggregate_input_1 = require("./loantype-max-order-by-aggregate.input");
const loantype_min_order_by_aggregate_input_1 = require("./loantype-min-order-by-aggregate.input");
const loantype_sum_order_by_aggregate_input_1 = require("./loantype-sum-order-by-aggregate.input");
let LoantypeOrderByWithAggregationInput = class LoantypeOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeOrderByWithAggregationInput.prototype, "weekDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeOrderByWithAggregationInput.prototype, "rate", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeOrderByWithAggregationInput.prototype, "overdueRate", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_count_order_by_aggregate_input_1.LoantypeCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", loantype_count_order_by_aggregate_input_1.LoantypeCountOrderByAggregateInput)
], LoantypeOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_avg_order_by_aggregate_input_1.LoantypeAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", loantype_avg_order_by_aggregate_input_1.LoantypeAvgOrderByAggregateInput)
], LoantypeOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_max_order_by_aggregate_input_1.LoantypeMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", loantype_max_order_by_aggregate_input_1.LoantypeMaxOrderByAggregateInput)
], LoantypeOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_min_order_by_aggregate_input_1.LoantypeMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", loantype_min_order_by_aggregate_input_1.LoantypeMinOrderByAggregateInput)
], LoantypeOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_sum_order_by_aggregate_input_1.LoantypeSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", loantype_sum_order_by_aggregate_input_1.LoantypeSumOrderByAggregateInput)
], LoantypeOrderByWithAggregationInput.prototype, "_sum", void 0);
LoantypeOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], LoantypeOrderByWithAggregationInput);
exports.LoantypeOrderByWithAggregationInput = LoantypeOrderByWithAggregationInput;
//# sourceMappingURL=loantype-order-by-with-aggregation.input.js.map