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
var ContractTypeWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractTypeWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const decimal_filter_input_1 = require("../prisma/decimal-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const graphql_3 = require("@nestjs/graphql");
const date_time_nullable_filter_input_1 = require("../prisma/date-time-nullable-filter.input");
const contract_list_relation_filter_input_1 = require("../contract/contract-list-relation-filter.input");
let ContractTypeWhereInput = ContractTypeWhereInput_1 = class ContractTypeWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ContractTypeWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ContractTypeWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ContractTypeWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ContractTypeWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ContractTypeWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ContractTypeWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ContractTypeWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ContractTypeWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ContractTypeWhereInput.prototype, "monthDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], ContractTypeWhereInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], ContractTypeWhereInput.prototype, "maxRate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ContractTypeWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_nullable_filter_input_1.DateTimeNullableFilter)
], ContractTypeWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_list_relation_filter_input_1.ContractListRelationFilter, { nullable: true }),
    __metadata("design:type", contract_list_relation_filter_input_1.ContractListRelationFilter)
], ContractTypeWhereInput.prototype, "contract", void 0);
ContractTypeWhereInput = ContractTypeWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ContractTypeWhereInput);
exports.ContractTypeWhereInput = ContractTypeWhereInput;
//# sourceMappingURL=contract-type-where.input.js.map