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
exports.ContractOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const contract_count_order_by_aggregate_input_1 = require("./contract-count-order-by-aggregate.input");
const contract_max_order_by_aggregate_input_1 = require("./contract-max-order-by-aggregate.input");
const contract_min_order_by_aggregate_input_1 = require("./contract-min-order-by-aggregate.input");
let ContractOrderByWithAggregationInput = class ContractOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractOrderByWithAggregationInput.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ContractOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractOrderByWithAggregationInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractOrderByWithAggregationInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ContractOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractOrderByWithAggregationInput.prototype, "contractTypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractOrderByWithAggregationInput.prototype, "loanLeadId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractOrderByWithAggregationInput.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_count_order_by_aggregate_input_1.ContractCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", contract_count_order_by_aggregate_input_1.ContractCountOrderByAggregateInput)
], ContractOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_max_order_by_aggregate_input_1.ContractMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", contract_max_order_by_aggregate_input_1.ContractMaxOrderByAggregateInput)
], ContractOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_min_order_by_aggregate_input_1.ContractMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", contract_min_order_by_aggregate_input_1.ContractMinOrderByAggregateInput)
], ContractOrderByWithAggregationInput.prototype, "_min", void 0);
ContractOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], ContractOrderByWithAggregationInput);
exports.ContractOrderByWithAggregationInput = ContractOrderByWithAggregationInput;
//# sourceMappingURL=contract-order-by-with-aggregation.input.js.map