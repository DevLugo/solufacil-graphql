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
exports.ComissionPaymentConfigurationOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const loantype_order_by_with_relation_input_1 = require("../loantype/loantype-order-by-with-relation.input");
let ComissionPaymentConfigurationOrderByWithRelationInput = class ComissionPaymentConfigurationOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationOrderByWithRelationInput.prototype, "employeeType", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_order_by_with_relation_input_1.LoantypeOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", loantype_order_by_with_relation_input_1.LoantypeOrderByWithRelationInput)
], ComissionPaymentConfigurationOrderByWithRelationInput.prototype, "loanType", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationOrderByWithRelationInput.prototype, "loantypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationOrderByWithRelationInput.prototype, "commissionGoalType", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationOrderByWithRelationInput.prototype, "commissionType", void 0);
ComissionPaymentConfigurationOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], ComissionPaymentConfigurationOrderByWithRelationInput);
exports.ComissionPaymentConfigurationOrderByWithRelationInput = ComissionPaymentConfigurationOrderByWithRelationInput;
//# sourceMappingURL=comission-payment-configuration-order-by-with-relation.input.js.map