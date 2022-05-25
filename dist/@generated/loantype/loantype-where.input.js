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
var LoantypeWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoantypeWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const float_filter_input_1 = require("../prisma/float-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const loan_list_relation_filter_input_1 = require("../loan/loan-list-relation-filter.input");
const comission_payment_configuration_list_relation_filter_input_1 = require("../comission-payment-configuration/comission-payment-configuration-list-relation-filter.input");
let LoantypeWhereInput = LoantypeWhereInput_1 = class LoantypeWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [LoantypeWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoantypeWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LoantypeWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoantypeWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LoantypeWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoantypeWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LoantypeWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LoantypeWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], LoantypeWhereInput.prototype, "weekDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => float_filter_input_1.FloatFilter, { nullable: true }),
    __metadata("design:type", float_filter_input_1.FloatFilter)
], LoantypeWhereInput.prototype, "rate", void 0);
__decorate([
    (0, graphql_1.Field)(() => float_filter_input_1.FloatFilter, { nullable: true }),
    __metadata("design:type", float_filter_input_1.FloatFilter)
], LoantypeWhereInput.prototype, "overdueRate", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LoantypeWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LoantypeWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_list_relation_filter_input_1.LoanListRelationFilter, { nullable: true }),
    __metadata("design:type", loan_list_relation_filter_input_1.LoanListRelationFilter)
], LoantypeWhereInput.prototype, "Loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_list_relation_filter_input_1.ComissionPaymentConfigurationListRelationFilter, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_list_relation_filter_input_1.ComissionPaymentConfigurationListRelationFilter)
], LoantypeWhereInput.prototype, "ComissionPaymentConfiguration", void 0);
LoantypeWhereInput = LoantypeWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], LoantypeWhereInput);
exports.LoantypeWhereInput = LoantypeWhereInput;
//# sourceMappingURL=loantype-where.input.js.map