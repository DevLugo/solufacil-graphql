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
var LoanScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_loan_state_filter_input_1 = require("../prisma/enum-loan-state-filter.input");
const graphql_3 = require("@nestjs/graphql");
const decimal_filter_input_1 = require("../prisma/decimal-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let LoanScalarWhereInput = LoanScalarWhereInput_1 = class LoanScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [LoanScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoanScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LoanScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoanScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LoanScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoanScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LoanScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", enum_loan_state_filter_input_1.EnumLoanStateFilter)
], LoanScalarWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], LoanScalarWhereInput.prototype, "weeklyPaymentAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], LoanScalarWhereInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LoanScalarWhereInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LoanScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LoanScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LoanScalarWhereInput.prototype, "contractId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LoanScalarWhereInput.prototype, "loantypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LoanScalarWhereInput.prototype, "employeeId", void 0);
LoanScalarWhereInput = LoanScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], LoanScalarWhereInput);
exports.LoanScalarWhereInput = LoanScalarWhereInput;
//# sourceMappingURL=loan-scalar-where.input.js.map