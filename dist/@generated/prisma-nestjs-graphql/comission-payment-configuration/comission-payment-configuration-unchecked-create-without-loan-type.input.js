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
exports.ComissionPaymentConfigurationUncheckedCreateWithoutLoanTypeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employees_types_enum_1 = require("../prisma/employees-types.enum");
const commission_goal_type_enum_1 = require("../prisma/commission-goal-type.enum");
const commission_type_enum_1 = require("../prisma/commission-type.enum");
let ComissionPaymentConfigurationUncheckedCreateWithoutLoanTypeInput = class ComissionPaymentConfigurationUncheckedCreateWithoutLoanTypeInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ComissionPaymentConfigurationUncheckedCreateWithoutLoanTypeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => employees_types_enum_1.EmployeesTypes, { nullable: false }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationUncheckedCreateWithoutLoanTypeInput.prototype, "employeeType", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_goal_type_enum_1.CommissionGoalType, { nullable: false }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationUncheckedCreateWithoutLoanTypeInput.prototype, "commissionGoalType", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_type_enum_1.CommissionType, { nullable: false }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationUncheckedCreateWithoutLoanTypeInput.prototype, "commissionType", void 0);
ComissionPaymentConfigurationUncheckedCreateWithoutLoanTypeInput = __decorate([
    (0, graphql_2.InputType)()
], ComissionPaymentConfigurationUncheckedCreateWithoutLoanTypeInput);
exports.ComissionPaymentConfigurationUncheckedCreateWithoutLoanTypeInput = ComissionPaymentConfigurationUncheckedCreateWithoutLoanTypeInput;
//# sourceMappingURL=comission-payment-configuration-unchecked-create-without-loan-type.input.js.map