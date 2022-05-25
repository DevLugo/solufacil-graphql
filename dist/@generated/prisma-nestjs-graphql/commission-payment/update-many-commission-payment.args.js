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
exports.UpdateManyCommissionPaymentArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const commission_payment_update_many_mutation_input_1 = require("./commission-payment-update-many-mutation.input");
const commission_payment_where_input_1 = require("./commission-payment-where.input");
let UpdateManyCommissionPaymentArgs = class UpdateManyCommissionPaymentArgs {
};
__decorate([
    (0, graphql_1.Field)(() => commission_payment_update_many_mutation_input_1.CommissionPaymentUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", commission_payment_update_many_mutation_input_1.CommissionPaymentUpdateManyMutationInput)
], UpdateManyCommissionPaymentArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_where_input_1.CommissionPaymentWhereInput, { nullable: true }),
    __metadata("design:type", commission_payment_where_input_1.CommissionPaymentWhereInput)
], UpdateManyCommissionPaymentArgs.prototype, "where", void 0);
UpdateManyCommissionPaymentArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyCommissionPaymentArgs);
exports.UpdateManyCommissionPaymentArgs = UpdateManyCommissionPaymentArgs;
//# sourceMappingURL=update-many-commission-payment.args.js.map