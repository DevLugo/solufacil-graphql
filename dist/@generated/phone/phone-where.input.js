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
var PhoneWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const borrower_relation_filter_input_1 = require("../borrower/borrower-relation-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const graphql_3 = require("@nestjs/graphql");
const employee_relation_filter_input_1 = require("../employee/employee-relation-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const aval_relation_filter_input_1 = require("../aval/aval-relation-filter.input");
let PhoneWhereInput = PhoneWhereInput_1 = class PhoneWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [PhoneWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PhoneWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PhoneWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PhoneWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PhoneWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PhoneWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], PhoneWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], PhoneWhereInput.prototype, "number", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_relation_filter_input_1.BorrowerRelationFilter, { nullable: true }),
    __metadata("design:type", borrower_relation_filter_input_1.BorrowerRelationFilter)
], PhoneWhereInput.prototype, "Borrower", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], PhoneWhereInput.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", employee_relation_filter_input_1.EmployeeRelationFilter)
], PhoneWhereInput.prototype, "Employee", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], PhoneWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], PhoneWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_relation_filter_input_1.AvalRelationFilter, { nullable: true }),
    __metadata("design:type", aval_relation_filter_input_1.AvalRelationFilter)
], PhoneWhereInput.prototype, "aval", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], PhoneWhereInput.prototype, "avalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], PhoneWhereInput.prototype, "employeeId", void 0);
PhoneWhereInput = PhoneWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], PhoneWhereInput);
exports.PhoneWhereInput = PhoneWhereInput;
//# sourceMappingURL=phone-where.input.js.map