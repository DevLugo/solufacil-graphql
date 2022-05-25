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
var NestedEnumCommissionGoalTypeWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCommissionGoalTypeWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const commission_goal_type_enum_1 = require("./commission-goal-type.enum");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_commission_goal_type_filter_input_1 = require("./nested-enum-commission-goal-type-filter.input");
let NestedEnumCommissionGoalTypeWithAggregatesFilter = NestedEnumCommissionGoalTypeWithAggregatesFilter_1 = class NestedEnumCommissionGoalTypeWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => commission_goal_type_enum_1.CommissionGoalType, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumCommissionGoalTypeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_goal_type_enum_1.CommissionGoalType], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumCommissionGoalTypeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_goal_type_enum_1.CommissionGoalType], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumCommissionGoalTypeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumCommissionGoalTypeWithAggregatesFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumCommissionGoalTypeWithAggregatesFilter)
], NestedEnumCommissionGoalTypeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    __metadata("design:type", nested_int_filter_input_1.NestedIntFilter)
], NestedEnumCommissionGoalTypeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_commission_goal_type_filter_input_1.NestedEnumCommissionGoalTypeFilter, { nullable: true }),
    __metadata("design:type", nested_enum_commission_goal_type_filter_input_1.NestedEnumCommissionGoalTypeFilter)
], NestedEnumCommissionGoalTypeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_commission_goal_type_filter_input_1.NestedEnumCommissionGoalTypeFilter, { nullable: true }),
    __metadata("design:type", nested_enum_commission_goal_type_filter_input_1.NestedEnumCommissionGoalTypeFilter)
], NestedEnumCommissionGoalTypeWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumCommissionGoalTypeWithAggregatesFilter = NestedEnumCommissionGoalTypeWithAggregatesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumCommissionGoalTypeWithAggregatesFilter);
exports.NestedEnumCommissionGoalTypeWithAggregatesFilter = NestedEnumCommissionGoalTypeWithAggregatesFilter;
//# sourceMappingURL=nested-enum-commission-goal-type-with-aggregates-filter.input.js.map