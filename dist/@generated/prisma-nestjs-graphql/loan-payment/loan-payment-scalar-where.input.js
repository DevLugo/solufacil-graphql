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
var LoanPaymentScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanPaymentScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const decimal_filter_input_1 = require("../prisma/decimal-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const graphql_3 = require("@nestjs/graphql");
let LoanPaymentScalarWhereInput = LoanPaymentScalarWhereInput_1 = class LoanPaymentScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [LoanPaymentScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LoanPaymentScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LoanPaymentScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LoanPaymentScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], LoanPaymentScalarWhereInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LoanPaymentScalarWhereInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], LoanPaymentScalarWhereInput.prototype, "comments", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LoanPaymentScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LoanPaymentScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LoanPaymentScalarWhereInput.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LoanPaymentScalarWhereInput.prototype, "employeeId", void 0);
LoanPaymentScalarWhereInput = LoanPaymentScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], LoanPaymentScalarWhereInput);
exports.LoanPaymentScalarWhereInput = LoanPaymentScalarWhereInput;
//# sourceMappingURL=loan-payment-scalar-where.input.js.map