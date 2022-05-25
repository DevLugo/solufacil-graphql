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
var PhoneScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const string_nullable_with_aggregates_filter_input_1 = require("../prisma/string-nullable-with-aggregates-filter.input");
const graphql_3 = require("@nestjs/graphql");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
let PhoneScalarWhereWithAggregatesInput = PhoneScalarWhereWithAggregatesInput_1 = class PhoneScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [PhoneScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PhoneScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PhoneScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PhoneScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PhoneScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PhoneScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], PhoneScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], PhoneScalarWhereWithAggregatesInput.prototype, "number", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], PhoneScalarWhereWithAggregatesInput.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], PhoneScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], PhoneScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], PhoneScalarWhereWithAggregatesInput.prototype, "avalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], PhoneScalarWhereWithAggregatesInput.prototype, "employeeId", void 0);
PhoneScalarWhereWithAggregatesInput = PhoneScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], PhoneScalarWhereWithAggregatesInput);
exports.PhoneScalarWhereWithAggregatesInput = PhoneScalarWhereWithAggregatesInput;
//# sourceMappingURL=phone-scalar-where-with-aggregates.input.js.map