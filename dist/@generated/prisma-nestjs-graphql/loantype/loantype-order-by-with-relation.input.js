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
exports.LoantypeOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const loan_order_by_relation_aggregate_input_1 = require("../loan/loan-order-by-relation-aggregate.input");
const comission_payment_configuration_order_by_relation_aggregate_input_1 = require("../comission-payment-configuration/comission-payment-configuration-order-by-relation-aggregate.input");
let LoantypeOrderByWithRelationInput = class LoantypeOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeOrderByWithRelationInput.prototype, "weekDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeOrderByWithRelationInput.prototype, "rate", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeOrderByWithRelationInput.prototype, "overdueRate", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_order_by_relation_aggregate_input_1.LoanOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", loan_order_by_relation_aggregate_input_1.LoanOrderByRelationAggregateInput)
], LoantypeOrderByWithRelationInput.prototype, "Loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_order_by_relation_aggregate_input_1.ComissionPaymentConfigurationOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_order_by_relation_aggregate_input_1.ComissionPaymentConfigurationOrderByRelationAggregateInput)
], LoantypeOrderByWithRelationInput.prototype, "ComissionPaymentConfiguration", void 0);
LoantypeOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], LoantypeOrderByWithRelationInput);
exports.LoantypeOrderByWithRelationInput = LoantypeOrderByWithRelationInput;
//# sourceMappingURL=loantype-order-by-with-relation.input.js.map