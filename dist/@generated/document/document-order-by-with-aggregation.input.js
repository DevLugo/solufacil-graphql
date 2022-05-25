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
exports.DocumentOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const document_count_order_by_aggregate_input_1 = require("./document-count-order-by-aggregate.input");
const document_max_order_by_aggregate_input_1 = require("./document-max-order-by-aggregate.input");
const document_min_order_by_aggregate_input_1 = require("./document-min-order-by-aggregate.input");
let DocumentOrderByWithAggregationInput = class DocumentOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DocumentOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DocumentOrderByWithAggregationInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DocumentOrderByWithAggregationInput.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DocumentOrderByWithAggregationInput.prototype, "avalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DocumentOrderByWithAggregationInput.prototype, "contractId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DocumentOrderByWithAggregationInput.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_count_order_by_aggregate_input_1.DocumentCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", document_count_order_by_aggregate_input_1.DocumentCountOrderByAggregateInput)
], DocumentOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_max_order_by_aggregate_input_1.DocumentMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", document_max_order_by_aggregate_input_1.DocumentMaxOrderByAggregateInput)
], DocumentOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_min_order_by_aggregate_input_1.DocumentMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", document_min_order_by_aggregate_input_1.DocumentMinOrderByAggregateInput)
], DocumentOrderByWithAggregationInput.prototype, "_min", void 0);
DocumentOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], DocumentOrderByWithAggregationInput);
exports.DocumentOrderByWithAggregationInput = DocumentOrderByWithAggregationInput;
//# sourceMappingURL=document-order-by-with-aggregation.input.js.map