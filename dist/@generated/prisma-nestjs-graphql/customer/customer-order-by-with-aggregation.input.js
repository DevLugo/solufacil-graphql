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
exports.CustomerOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const customer_count_order_by_aggregate_input_1 = require("./customer-count-order-by-aggregate.input");
const customer_max_order_by_aggregate_input_1 = require("./customer-max-order-by-aggregate.input");
const customer_min_order_by_aggregate_input_1 = require("./customer-min-order-by-aggregate.input");
let CustomerOrderByWithAggregationInput = class CustomerOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CustomerOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CustomerOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CustomerOrderByWithAggregationInput.prototype, "logo", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CustomerOrderByWithAggregationInput.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CustomerOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CustomerOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_count_order_by_aggregate_input_1.CustomerCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", customer_count_order_by_aggregate_input_1.CustomerCountOrderByAggregateInput)
], CustomerOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_max_order_by_aggregate_input_1.CustomerMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", customer_max_order_by_aggregate_input_1.CustomerMaxOrderByAggregateInput)
], CustomerOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_min_order_by_aggregate_input_1.CustomerMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", customer_min_order_by_aggregate_input_1.CustomerMinOrderByAggregateInput)
], CustomerOrderByWithAggregationInput.prototype, "_min", void 0);
CustomerOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], CustomerOrderByWithAggregationInput);
exports.CustomerOrderByWithAggregationInput = CustomerOrderByWithAggregationInput;
//# sourceMappingURL=customer-order-by-with-aggregation.input.js.map