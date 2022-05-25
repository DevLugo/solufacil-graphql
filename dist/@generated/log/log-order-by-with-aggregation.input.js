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
exports.LogOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const log_count_order_by_aggregate_input_1 = require("./log-count-order-by-aggregate.input");
const log_max_order_by_aggregate_input_1 = require("./log-max-order-by-aggregate.input");
const log_min_order_by_aggregate_input_1 = require("./log-min-order-by-aggregate.input");
let LogOrderByWithAggregationInput = class LogOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LogOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LogOrderByWithAggregationInput.prototype, "requestBody", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LogOrderByWithAggregationInput.prototype, "requestType", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LogOrderByWithAggregationInput.prototype, "deviceType", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LogOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LogOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LogOrderByWithAggregationInput.prototype, "systemSectionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_count_order_by_aggregate_input_1.LogCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", log_count_order_by_aggregate_input_1.LogCountOrderByAggregateInput)
], LogOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_max_order_by_aggregate_input_1.LogMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", log_max_order_by_aggregate_input_1.LogMaxOrderByAggregateInput)
], LogOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_min_order_by_aggregate_input_1.LogMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", log_min_order_by_aggregate_input_1.LogMinOrderByAggregateInput)
], LogOrderByWithAggregationInput.prototype, "_min", void 0);
LogOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], LogOrderByWithAggregationInput);
exports.LogOrderByWithAggregationInput = LogOrderByWithAggregationInput;
//# sourceMappingURL=log-order-by-with-aggregation.input.js.map