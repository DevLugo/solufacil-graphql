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
exports.LoanUpdateManyWithoutLoanTypeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_create_without_loan_type_input_1 = require("./loan-create-without-loan-type.input");
const loan_create_or_connect_without_loan_type_input_1 = require("./loan-create-or-connect-without-loan-type.input");
const loan_upsert_with_where_unique_without_loan_type_input_1 = require("./loan-upsert-with-where-unique-without-loan-type.input");
const loan_create_many_loan_type_input_envelope_input_1 = require("./loan-create-many-loan-type-input-envelope.input");
const loan_where_unique_input_1 = require("./loan-where-unique.input");
const loan_update_with_where_unique_without_loan_type_input_1 = require("./loan-update-with-where-unique-without-loan-type.input");
const loan_update_many_with_where_without_loan_type_input_1 = require("./loan-update-many-with-where-without-loan-type.input");
const loan_scalar_where_input_1 = require("./loan-scalar-where.input");
let LoanUpdateManyWithoutLoanTypeInput = class LoanUpdateManyWithoutLoanTypeInput {
};
__decorate([
    (0, graphql_1.Field)(() => [loan_create_without_loan_type_input_1.LoanCreateWithoutLoanTypeInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutLoanTypeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_create_or_connect_without_loan_type_input_1.LoanCreateOrConnectWithoutLoanTypeInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutLoanTypeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_upsert_with_where_unique_without_loan_type_input_1.LoanUpsertWithWhereUniqueWithoutLoanTypeInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutLoanTypeInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_create_many_loan_type_input_envelope_input_1.LoanCreateManyLoanTypeInputEnvelope, { nullable: true }),
    __metadata("design:type", loan_create_many_loan_type_input_envelope_input_1.LoanCreateManyLoanTypeInputEnvelope)
], LoanUpdateManyWithoutLoanTypeInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_where_unique_input_1.LoanWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutLoanTypeInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_where_unique_input_1.LoanWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutLoanTypeInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_where_unique_input_1.LoanWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutLoanTypeInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_where_unique_input_1.LoanWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutLoanTypeInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_update_with_where_unique_without_loan_type_input_1.LoanUpdateWithWhereUniqueWithoutLoanTypeInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutLoanTypeInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_update_many_with_where_without_loan_type_input_1.LoanUpdateManyWithWhereWithoutLoanTypeInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutLoanTypeInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_scalar_where_input_1.LoanScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanUpdateManyWithoutLoanTypeInput.prototype, "deleteMany", void 0);
LoanUpdateManyWithoutLoanTypeInput = __decorate([
    (0, graphql_2.InputType)()
], LoanUpdateManyWithoutLoanTypeInput);
exports.LoanUpdateManyWithoutLoanTypeInput = LoanUpdateManyWithoutLoanTypeInput;
//# sourceMappingURL=loan-update-many-without-loan-type.input.js.map