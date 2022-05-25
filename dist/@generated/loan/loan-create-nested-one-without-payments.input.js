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
exports.LoanCreateNestedOneWithoutPaymentsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_create_without_payments_input_1 = require("./loan-create-without-payments.input");
const loan_create_or_connect_without_payments_input_1 = require("./loan-create-or-connect-without-payments.input");
const loan_where_unique_input_1 = require("./loan-where-unique.input");
let LoanCreateNestedOneWithoutPaymentsInput = class LoanCreateNestedOneWithoutPaymentsInput {
};
__decorate([
    (0, graphql_1.Field)(() => loan_create_without_payments_input_1.LoanCreateWithoutPaymentsInput, { nullable: true }),
    __metadata("design:type", loan_create_without_payments_input_1.LoanCreateWithoutPaymentsInput)
], LoanCreateNestedOneWithoutPaymentsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_create_or_connect_without_payments_input_1.LoanCreateOrConnectWithoutPaymentsInput, { nullable: true }),
    __metadata("design:type", loan_create_or_connect_without_payments_input_1.LoanCreateOrConnectWithoutPaymentsInput)
], LoanCreateNestedOneWithoutPaymentsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_where_unique_input_1.LoanWhereUniqueInput, { nullable: true }),
    __metadata("design:type", loan_where_unique_input_1.LoanWhereUniqueInput)
], LoanCreateNestedOneWithoutPaymentsInput.prototype, "connect", void 0);
LoanCreateNestedOneWithoutPaymentsInput = __decorate([
    (0, graphql_2.InputType)()
], LoanCreateNestedOneWithoutPaymentsInput);
exports.LoanCreateNestedOneWithoutPaymentsInput = LoanCreateNestedOneWithoutPaymentsInput;
//# sourceMappingURL=loan-create-nested-one-without-payments.input.js.map