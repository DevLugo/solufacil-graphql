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
exports.ComissionPaymentConfigurationMinAggregate = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employees_types_enum_1 = require("../prisma/employees-types.enum");
const commission_goal_type_enum_1 = require("../prisma/commission-goal-type.enum");
const commission_type_enum_1 = require("../prisma/commission-type.enum");
let ComissionPaymentConfigurationMinAggregate = class ComissionPaymentConfigurationMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ComissionPaymentConfigurationMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => employees_types_enum_1.EmployeesTypes, { nullable: true }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationMinAggregate.prototype, "employeeType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ComissionPaymentConfigurationMinAggregate.prototype, "loantypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_goal_type_enum_1.CommissionGoalType, { nullable: true }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationMinAggregate.prototype, "commissionGoalType", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_type_enum_1.CommissionType, { nullable: true }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationMinAggregate.prototype, "commissionType", void 0);
ComissionPaymentConfigurationMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ComissionPaymentConfigurationMinAggregate);
exports.ComissionPaymentConfigurationMinAggregate = ComissionPaymentConfigurationMinAggregate;
//# sourceMappingURL=comission-payment-configuration-min-aggregate.output.js.map