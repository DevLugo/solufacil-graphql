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
exports.LocalOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const local_count_order_by_aggregate_input_1 = require("./local-count-order-by-aggregate.input");
const local_max_order_by_aggregate_input_1 = require("./local-max-order-by-aggregate.input");
const local_min_order_by_aggregate_input_1 = require("./local-min-order-by-aggregate.input");
let LocalOrderByWithAggregationInput = class LocalOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LocalOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LocalOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LocalOrderByWithAggregationInput.prototype, "address", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LocalOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LocalOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LocalOrderByWithAggregationInput.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_count_order_by_aggregate_input_1.LocalCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", local_count_order_by_aggregate_input_1.LocalCountOrderByAggregateInput)
], LocalOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_max_order_by_aggregate_input_1.LocalMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", local_max_order_by_aggregate_input_1.LocalMaxOrderByAggregateInput)
], LocalOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_min_order_by_aggregate_input_1.LocalMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", local_min_order_by_aggregate_input_1.LocalMinOrderByAggregateInput)
], LocalOrderByWithAggregationInput.prototype, "_min", void 0);
LocalOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], LocalOrderByWithAggregationInput);
exports.LocalOrderByWithAggregationInput = LocalOrderByWithAggregationInput;
//# sourceMappingURL=local-order-by-with-aggregation.input.js.map