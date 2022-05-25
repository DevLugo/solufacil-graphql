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
exports.AvalOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const aval_count_order_by_aggregate_input_1 = require("./aval-count-order-by-aggregate.input");
const aval_max_order_by_aggregate_input_1 = require("./aval-max-order-by-aggregate.input");
const aval_min_order_by_aggregate_input_1 = require("./aval-min-order-by-aggregate.input");
let AvalOrderByWithAggregationInput = class AvalOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], AvalOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], AvalOrderByWithAggregationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], AvalOrderByWithAggregationInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], AvalOrderByWithAggregationInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], AvalOrderByWithAggregationInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], AvalOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], AvalOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_count_order_by_aggregate_input_1.AvalCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", aval_count_order_by_aggregate_input_1.AvalCountOrderByAggregateInput)
], AvalOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_max_order_by_aggregate_input_1.AvalMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", aval_max_order_by_aggregate_input_1.AvalMaxOrderByAggregateInput)
], AvalOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_min_order_by_aggregate_input_1.AvalMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", aval_min_order_by_aggregate_input_1.AvalMinOrderByAggregateInput)
], AvalOrderByWithAggregationInput.prototype, "_min", void 0);
AvalOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], AvalOrderByWithAggregationInput);
exports.AvalOrderByWithAggregationInput = AvalOrderByWithAggregationInput;
//# sourceMappingURL=aval-order-by-with-aggregation.input.js.map