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
var PhoneScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const graphql_3 = require("@nestjs/graphql");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let PhoneScalarWhereInput = PhoneScalarWhereInput_1 = class PhoneScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [PhoneScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PhoneScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PhoneScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PhoneScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PhoneScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PhoneScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], PhoneScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], PhoneScalarWhereInput.prototype, "number", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], PhoneScalarWhereInput.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], PhoneScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], PhoneScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], PhoneScalarWhereInput.prototype, "avalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], PhoneScalarWhereInput.prototype, "employeeId", void 0);
PhoneScalarWhereInput = PhoneScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], PhoneScalarWhereInput);
exports.PhoneScalarWhereInput = PhoneScalarWhereInput;
//# sourceMappingURL=phone-scalar-where.input.js.map