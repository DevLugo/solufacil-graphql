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
exports.LoanPaymentUpdateManyWithWhereWithoutLoanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_payment_scalar_where_input_1 = require("./loan-payment-scalar-where.input");
const loan_payment_update_many_mutation_input_1 = require("./loan-payment-update-many-mutation.input");
let LoanPaymentUpdateManyWithWhereWithoutLoanInput = class LoanPaymentUpdateManyWithWhereWithoutLoanInput {
};
__decorate([
    (0, graphql_1.Field)(() => loan_payment_scalar_where_input_1.LoanPaymentScalarWhereInput, { nullable: false }),
    __metadata("design:type", loan_payment_scalar_where_input_1.LoanPaymentScalarWhereInput)
], LoanPaymentUpdateManyWithWhereWithoutLoanInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_update_many_mutation_input_1.LoanPaymentUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", loan_payment_update_many_mutation_input_1.LoanPaymentUpdateManyMutationInput)
], LoanPaymentUpdateManyWithWhereWithoutLoanInput.prototype, "data", void 0);
LoanPaymentUpdateManyWithWhereWithoutLoanInput = __decorate([
    (0, graphql_2.InputType)()
], LoanPaymentUpdateManyWithWhereWithoutLoanInput);
exports.LoanPaymentUpdateManyWithWhereWithoutLoanInput = LoanPaymentUpdateManyWithWhereWithoutLoanInput;
//# sourceMappingURL=loan-payment-update-many-with-where-without-loan.input.js.map