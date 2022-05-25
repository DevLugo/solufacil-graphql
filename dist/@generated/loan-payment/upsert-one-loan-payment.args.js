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
exports.UpsertOneLoanPaymentArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_payment_where_unique_input_1 = require("./loan-payment-where-unique.input");
const loan_payment_create_input_1 = require("./loan-payment-create.input");
const loan_payment_update_input_1 = require("./loan-payment-update.input");
let UpsertOneLoanPaymentArgs = class UpsertOneLoanPaymentArgs {
};
__decorate([
    (0, graphql_1.Field)(() => loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput, { nullable: false }),
    __metadata("design:type", loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput)
], UpsertOneLoanPaymentArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_create_input_1.LoanPaymentCreateInput, { nullable: false }),
    __metadata("design:type", loan_payment_create_input_1.LoanPaymentCreateInput)
], UpsertOneLoanPaymentArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_update_input_1.LoanPaymentUpdateInput, { nullable: false }),
    __metadata("design:type", loan_payment_update_input_1.LoanPaymentUpdateInput)
], UpsertOneLoanPaymentArgs.prototype, "update", void 0);
UpsertOneLoanPaymentArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneLoanPaymentArgs);
exports.UpsertOneLoanPaymentArgs = UpsertOneLoanPaymentArgs;
//# sourceMappingURL=upsert-one-loan-payment.args.js.map