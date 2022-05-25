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
exports.LoanCreateNestedManyWithoutLoanTypeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_create_without_loan_type_input_1 = require("./loan-create-without-loan-type.input");
const loan_create_or_connect_without_loan_type_input_1 = require("./loan-create-or-connect-without-loan-type.input");
const loan_create_many_loan_type_input_envelope_input_1 = require("./loan-create-many-loan-type-input-envelope.input");
const loan_where_unique_input_1 = require("./loan-where-unique.input");
let LoanCreateNestedManyWithoutLoanTypeInput = class LoanCreateNestedManyWithoutLoanTypeInput {
};
__decorate([
    (0, graphql_1.Field)(() => [loan_create_without_loan_type_input_1.LoanCreateWithoutLoanTypeInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanCreateNestedManyWithoutLoanTypeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_create_or_connect_without_loan_type_input_1.LoanCreateOrConnectWithoutLoanTypeInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanCreateNestedManyWithoutLoanTypeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_create_many_loan_type_input_envelope_input_1.LoanCreateManyLoanTypeInputEnvelope, { nullable: true }),
    __metadata("design:type", loan_create_many_loan_type_input_envelope_input_1.LoanCreateManyLoanTypeInputEnvelope)
], LoanCreateNestedManyWithoutLoanTypeInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_where_unique_input_1.LoanWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanCreateNestedManyWithoutLoanTypeInput.prototype, "connect", void 0);
LoanCreateNestedManyWithoutLoanTypeInput = __decorate([
    (0, graphql_2.InputType)()
], LoanCreateNestedManyWithoutLoanTypeInput);
exports.LoanCreateNestedManyWithoutLoanTypeInput = LoanCreateNestedManyWithoutLoanTypeInput;
//# sourceMappingURL=loan-create-nested-many-without-loan-type.input.js.map