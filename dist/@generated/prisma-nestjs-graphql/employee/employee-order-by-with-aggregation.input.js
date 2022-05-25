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
exports.EmployeeOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const employee_count_order_by_aggregate_input_1 = require("./employee-count-order-by-aggregate.input");
const employee_max_order_by_aggregate_input_1 = require("./employee-max-order-by-aggregate.input");
const employee_min_order_by_aggregate_input_1 = require("./employee-min-order-by-aggregate.input");
let EmployeeOrderByWithAggregationInput = class EmployeeOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EmployeeOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EmployeeOrderByWithAggregationInput.prototype, "type", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], EmployeeOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], EmployeeOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EmployeeOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_count_order_by_aggregate_input_1.EmployeeCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", employee_count_order_by_aggregate_input_1.EmployeeCountOrderByAggregateInput)
], EmployeeOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_max_order_by_aggregate_input_1.EmployeeMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", employee_max_order_by_aggregate_input_1.EmployeeMaxOrderByAggregateInput)
], EmployeeOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_min_order_by_aggregate_input_1.EmployeeMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", employee_min_order_by_aggregate_input_1.EmployeeMinOrderByAggregateInput)
], EmployeeOrderByWithAggregationInput.prototype, "_min", void 0);
EmployeeOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeOrderByWithAggregationInput);
exports.EmployeeOrderByWithAggregationInput = EmployeeOrderByWithAggregationInput;
//# sourceMappingURL=employee-order-by-with-aggregation.input.js.map