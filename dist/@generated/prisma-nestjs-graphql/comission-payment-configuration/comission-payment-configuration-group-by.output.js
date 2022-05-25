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
exports.ComissionPaymentConfigurationGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employees_types_enum_1 = require("../prisma/employees-types.enum");
const commission_goal_type_enum_1 = require("../prisma/commission-goal-type.enum");
const commission_type_enum_1 = require("../prisma/commission-type.enum");
const comission_payment_configuration_count_aggregate_output_1 = require("./comission-payment-configuration-count-aggregate.output");
const comission_payment_configuration_min_aggregate_output_1 = require("./comission-payment-configuration-min-aggregate.output");
const comission_payment_configuration_max_aggregate_output_1 = require("./comission-payment-configuration-max-aggregate.output");
let ComissionPaymentConfigurationGroupBy = class ComissionPaymentConfigurationGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ComissionPaymentConfigurationGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => employees_types_enum_1.EmployeesTypes, { nullable: false }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationGroupBy.prototype, "employeeType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ComissionPaymentConfigurationGroupBy.prototype, "loantypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_goal_type_enum_1.CommissionGoalType, { nullable: false }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationGroupBy.prototype, "commissionGoalType", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_type_enum_1.CommissionType, { nullable: false }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationGroupBy.prototype, "commissionType", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_count_aggregate_output_1.ComissionPaymentConfigurationCountAggregate, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_count_aggregate_output_1.ComissionPaymentConfigurationCountAggregate)
], ComissionPaymentConfigurationGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_min_aggregate_output_1.ComissionPaymentConfigurationMinAggregate, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_min_aggregate_output_1.ComissionPaymentConfigurationMinAggregate)
], ComissionPaymentConfigurationGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_max_aggregate_output_1.ComissionPaymentConfigurationMaxAggregate, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_max_aggregate_output_1.ComissionPaymentConfigurationMaxAggregate)
], ComissionPaymentConfigurationGroupBy.prototype, "_max", void 0);
ComissionPaymentConfigurationGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], ComissionPaymentConfigurationGroupBy);
exports.ComissionPaymentConfigurationGroupBy = ComissionPaymentConfigurationGroupBy;
//# sourceMappingURL=comission-payment-configuration-group-by.output.js.map