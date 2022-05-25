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
var ComissionPaymentConfigurationScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComissionPaymentConfigurationScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const enum_employees_types_with_aggregates_filter_input_1 = require("../prisma/enum-employees-types-with-aggregates-filter.input");
const enum_commission_goal_type_with_aggregates_filter_input_1 = require("../prisma/enum-commission-goal-type-with-aggregates-filter.input");
const enum_commission_type_with_aggregates_filter_input_1 = require("../prisma/enum-commission-type-with-aggregates-filter.input");
let ComissionPaymentConfigurationScalarWhereWithAggregatesInput = ComissionPaymentConfigurationScalarWhereWithAggregatesInput_1 = class ComissionPaymentConfigurationScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ComissionPaymentConfigurationScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ComissionPaymentConfigurationScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ComissionPaymentConfigurationScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], ComissionPaymentConfigurationScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_employees_types_with_aggregates_filter_input_1.EnumEmployeesTypesWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", enum_employees_types_with_aggregates_filter_input_1.EnumEmployeesTypesWithAggregatesFilter)
], ComissionPaymentConfigurationScalarWhereWithAggregatesInput.prototype, "employeeType", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], ComissionPaymentConfigurationScalarWhereWithAggregatesInput.prototype, "loantypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_commission_goal_type_with_aggregates_filter_input_1.EnumCommissionGoalTypeWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", enum_commission_goal_type_with_aggregates_filter_input_1.EnumCommissionGoalTypeWithAggregatesFilter)
], ComissionPaymentConfigurationScalarWhereWithAggregatesInput.prototype, "commissionGoalType", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_commission_type_with_aggregates_filter_input_1.EnumCommissionTypeWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", enum_commission_type_with_aggregates_filter_input_1.EnumCommissionTypeWithAggregatesFilter)
], ComissionPaymentConfigurationScalarWhereWithAggregatesInput.prototype, "commissionType", void 0);
ComissionPaymentConfigurationScalarWhereWithAggregatesInput = ComissionPaymentConfigurationScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ComissionPaymentConfigurationScalarWhereWithAggregatesInput);
exports.ComissionPaymentConfigurationScalarWhereWithAggregatesInput = ComissionPaymentConfigurationScalarWhereWithAggregatesInput;
//# sourceMappingURL=comission-payment-configuration-scalar-where-with-aggregates.input.js.map