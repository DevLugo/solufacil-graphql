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
exports.CreateManyLoanPaymentArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_payment_create_many_input_1 = require("./loan-payment-create-many.input");
let CreateManyLoanPaymentArgs = class CreateManyLoanPaymentArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_create_many_input_1.LoanPaymentCreateManyInput], { nullable: false }),
    __metadata("design:type", Array)
], CreateManyLoanPaymentArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CreateManyLoanPaymentArgs.prototype, "skipDuplicates", void 0);
CreateManyLoanPaymentArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateManyLoanPaymentArgs);
exports.CreateManyLoanPaymentArgs = CreateManyLoanPaymentArgs;
//# sourceMappingURL=create-many-loan-payment.args.js.map