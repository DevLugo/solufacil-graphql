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
var NestedEnumCommissionGoalTypeFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCommissionGoalTypeFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const commission_goal_type_enum_1 = require("./commission-goal-type.enum");
let NestedEnumCommissionGoalTypeFilter = NestedEnumCommissionGoalTypeFilter_1 = class NestedEnumCommissionGoalTypeFilter {
};
__decorate([
    (0, graphql_1.Field)(() => commission_goal_type_enum_1.CommissionGoalType, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumCommissionGoalTypeFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_goal_type_enum_1.CommissionGoalType], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumCommissionGoalTypeFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_goal_type_enum_1.CommissionGoalType], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumCommissionGoalTypeFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumCommissionGoalTypeFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumCommissionGoalTypeFilter)
], NestedEnumCommissionGoalTypeFilter.prototype, "not", void 0);
NestedEnumCommissionGoalTypeFilter = NestedEnumCommissionGoalTypeFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumCommissionGoalTypeFilter);
exports.NestedEnumCommissionGoalTypeFilter = NestedEnumCommissionGoalTypeFilter;
//# sourceMappingURL=nested-enum-commission-goal-type-filter.input.js.map