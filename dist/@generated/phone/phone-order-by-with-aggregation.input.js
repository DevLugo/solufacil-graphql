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
exports.PhoneOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const phone_count_order_by_aggregate_input_1 = require("./phone-count-order-by-aggregate.input");
const phone_max_order_by_aggregate_input_1 = require("./phone-max-order-by-aggregate.input");
const phone_min_order_by_aggregate_input_1 = require("./phone-min-order-by-aggregate.input");
let PhoneOrderByWithAggregationInput = class PhoneOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PhoneOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PhoneOrderByWithAggregationInput.prototype, "number", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PhoneOrderByWithAggregationInput.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PhoneOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PhoneOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PhoneOrderByWithAggregationInput.prototype, "avalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PhoneOrderByWithAggregationInput.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_count_order_by_aggregate_input_1.PhoneCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", phone_count_order_by_aggregate_input_1.PhoneCountOrderByAggregateInput)
], PhoneOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_max_order_by_aggregate_input_1.PhoneMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", phone_max_order_by_aggregate_input_1.PhoneMaxOrderByAggregateInput)
], PhoneOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_min_order_by_aggregate_input_1.PhoneMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", phone_min_order_by_aggregate_input_1.PhoneMinOrderByAggregateInput)
], PhoneOrderByWithAggregationInput.prototype, "_min", void 0);
PhoneOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], PhoneOrderByWithAggregationInput);
exports.PhoneOrderByWithAggregationInput = PhoneOrderByWithAggregationInput;
//# sourceMappingURL=phone-order-by-with-aggregation.input.js.map