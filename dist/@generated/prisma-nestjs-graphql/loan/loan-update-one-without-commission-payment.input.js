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
exports.LoanUpdateOneWithoutCommissionPaymentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_create_without_commission_payment_input_1 = require("./loan-create-without-commission-payment.input");
const loan_create_or_connect_without_commission_payment_input_1 = require("./loan-create-or-connect-without-commission-payment.input");
const loan_upsert_without_commission_payment_input_1 = require("./loan-upsert-without-commission-payment.input");
const loan_where_unique_input_1 = require("./loan-where-unique.input");
const loan_update_without_commission_payment_input_1 = require("./loan-update-without-commission-payment.input");
let LoanUpdateOneWithoutCommissionPaymentInput = class LoanUpdateOneWithoutCommissionPaymentInput {
};
__decorate([
    (0, graphql_1.Field)(() => loan_create_without_commission_payment_input_1.LoanCreateWithoutCommissionPaymentInput, { nullable: true }),
    __metadata("design:type", loan_create_without_commission_payment_input_1.LoanCreateWithoutCommissionPaymentInput)
], LoanUpdateOneWithoutCommissionPaymentInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_create_or_connect_without_commission_payment_input_1.LoanCreateOrConnectWithoutCommissionPaymentInput, { nullable: true }),
    __metadata("design:type", loan_create_or_connect_without_commission_payment_input_1.LoanCreateOrConnectWithoutCommissionPaymentInput)
], LoanUpdateOneWithoutCommissionPaymentInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_upsert_without_commission_payment_input_1.LoanUpsertWithoutCommissionPaymentInput, { nullable: true }),
    __metadata("design:type", loan_upsert_without_commission_payment_input_1.LoanUpsertWithoutCommissionPaymentInput)
], LoanUpdateOneWithoutCommissionPaymentInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], LoanUpdateOneWithoutCommissionPaymentInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], LoanUpdateOneWithoutCommissionPaymentInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_where_unique_input_1.LoanWhereUniqueInput, { nullable: true }),
    __metadata("design:type", loan_where_unique_input_1.LoanWhereUniqueInput)
], LoanUpdateOneWithoutCommissionPaymentInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_update_without_commission_payment_input_1.LoanUpdateWithoutCommissionPaymentInput, { nullable: true }),
    __metadata("design:type", loan_update_without_commission_payment_input_1.LoanUpdateWithoutCommissionPaymentInput)
], LoanUpdateOneWithoutCommissionPaymentInput.prototype, "update", void 0);
LoanUpdateOneWithoutCommissionPaymentInput = __decorate([
    (0, graphql_2.InputType)()
], LoanUpdateOneWithoutCommissionPaymentInput);
exports.LoanUpdateOneWithoutCommissionPaymentInput = LoanUpdateOneWithoutCommissionPaymentInput;
//# sourceMappingURL=loan-update-one-without-commission-payment.input.js.map