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
var ComissionPaymentConfigurationScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComissionPaymentConfigurationScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_employees_types_filter_input_1 = require("../prisma/enum-employees-types-filter.input");
const enum_commission_goal_type_filter_input_1 = require("../prisma/enum-commission-goal-type-filter.input");
const enum_commission_type_filter_input_1 = require("../prisma/enum-commission-type-filter.input");
let ComissionPaymentConfigurationScalarWhereInput = ComissionPaymentConfigurationScalarWhereInput_1 = class ComissionPaymentConfigurationScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ComissionPaymentConfigurationScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ComissionPaymentConfigurationScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ComissionPaymentConfigurationScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ComissionPaymentConfigurationScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_employees_types_filter_input_1.EnumEmployeesTypesFilter, { nullable: true }),
    __metadata("design:type", enum_employees_types_filter_input_1.EnumEmployeesTypesFilter)
], ComissionPaymentConfigurationScalarWhereInput.prototype, "employeeType", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ComissionPaymentConfigurationScalarWhereInput.prototype, "loantypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_commission_goal_type_filter_input_1.EnumCommissionGoalTypeFilter, { nullable: true }),
    __metadata("design:type", enum_commission_goal_type_filter_input_1.EnumCommissionGoalTypeFilter)
], ComissionPaymentConfigurationScalarWhereInput.prototype, "commissionGoalType", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_commission_type_filter_input_1.EnumCommissionTypeFilter, { nullable: true }),
    __metadata("design:type", enum_commission_type_filter_input_1.EnumCommissionTypeFilter)
], ComissionPaymentConfigurationScalarWhereInput.prototype, "commissionType", void 0);
ComissionPaymentConfigurationScalarWhereInput = ComissionPaymentConfigurationScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ComissionPaymentConfigurationScalarWhereInput);
exports.ComissionPaymentConfigurationScalarWhereInput = ComissionPaymentConfigurationScalarWhereInput;
//# sourceMappingURL=comission-payment-configuration-scalar-where.input.js.map