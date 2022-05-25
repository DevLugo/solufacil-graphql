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
exports.FindManyCommissionPaymentArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const commission_payment_where_input_1 = require("./commission-payment-where.input");
const commission_payment_order_by_with_relation_input_1 = require("./commission-payment-order-by-with-relation.input");
const commission_payment_where_unique_input_1 = require("./commission-payment-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const commission_payment_scalar_field_enum_1 = require("./commission-payment-scalar-field.enum");
let FindManyCommissionPaymentArgs = class FindManyCommissionPaymentArgs {
};
__decorate([
    (0, graphql_1.Field)(() => commission_payment_where_input_1.CommissionPaymentWhereInput, { nullable: true }),
    __metadata("design:type", commission_payment_where_input_1.CommissionPaymentWhereInput)
], FindManyCommissionPaymentArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_order_by_with_relation_input_1.CommissionPaymentOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyCommissionPaymentArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_where_unique_input_1.CommissionPaymentWhereUniqueInput, { nullable: true }),
    __metadata("design:type", commission_payment_where_unique_input_1.CommissionPaymentWhereUniqueInput)
], FindManyCommissionPaymentArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyCommissionPaymentArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyCommissionPaymentArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_scalar_field_enum_1.CommissionPaymentScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyCommissionPaymentArgs.prototype, "distinct", void 0);
FindManyCommissionPaymentArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyCommissionPaymentArgs);
exports.FindManyCommissionPaymentArgs = FindManyCommissionPaymentArgs;
//# sourceMappingURL=find-many-commission-payment.args.js.map