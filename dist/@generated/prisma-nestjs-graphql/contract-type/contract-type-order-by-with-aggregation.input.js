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
exports.ContractTypeOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const contract_type_count_order_by_aggregate_input_1 = require("./contract-type-count-order-by-aggregate.input");
const contract_type_avg_order_by_aggregate_input_1 = require("./contract-type-avg-order-by-aggregate.input");
const contract_type_max_order_by_aggregate_input_1 = require("./contract-type-max-order-by-aggregate.input");
const contract_type_min_order_by_aggregate_input_1 = require("./contract-type-min-order-by-aggregate.input");
const contract_type_sum_order_by_aggregate_input_1 = require("./contract-type-sum-order-by-aggregate.input");
let ContractTypeOrderByWithAggregationInput = class ContractTypeOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractTypeOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractTypeOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractTypeOrderByWithAggregationInput.prototype, "monthDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractTypeOrderByWithAggregationInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractTypeOrderByWithAggregationInput.prototype, "maxRate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ContractTypeOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ContractTypeOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_count_order_by_aggregate_input_1.ContractTypeCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", contract_type_count_order_by_aggregate_input_1.ContractTypeCountOrderByAggregateInput)
], ContractTypeOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_avg_order_by_aggregate_input_1.ContractTypeAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", contract_type_avg_order_by_aggregate_input_1.ContractTypeAvgOrderByAggregateInput)
], ContractTypeOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_max_order_by_aggregate_input_1.ContractTypeMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", contract_type_max_order_by_aggregate_input_1.ContractTypeMaxOrderByAggregateInput)
], ContractTypeOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_min_order_by_aggregate_input_1.ContractTypeMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", contract_type_min_order_by_aggregate_input_1.ContractTypeMinOrderByAggregateInput)
], ContractTypeOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_sum_order_by_aggregate_input_1.ContractTypeSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", contract_type_sum_order_by_aggregate_input_1.ContractTypeSumOrderByAggregateInput)
], ContractTypeOrderByWithAggregationInput.prototype, "_sum", void 0);
ContractTypeOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], ContractTypeOrderByWithAggregationInput);
exports.ContractTypeOrderByWithAggregationInput = ContractTypeOrderByWithAggregationInput;
//# sourceMappingURL=contract-type-order-by-with-aggregation.input.js.map