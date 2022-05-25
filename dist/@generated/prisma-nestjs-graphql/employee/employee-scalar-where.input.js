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
var EmployeeScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_employees_types_filter_input_1 = require("../prisma/enum-employees-types-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const graphql_3 = require("@nestjs/graphql");
let EmployeeScalarWhereInput = EmployeeScalarWhereInput_1 = class EmployeeScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [EmployeeScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmployeeScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmployeeScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], EmployeeScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_employees_types_filter_input_1.EnumEmployeesTypesFilter, { nullable: true }),
    __metadata("design:type", enum_employees_types_filter_input_1.EnumEmployeesTypesFilter)
], EmployeeScalarWhereInput.prototype, "type", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], EmployeeScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], EmployeeScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], EmployeeScalarWhereInput.prototype, "userId", void 0);
EmployeeScalarWhereInput = EmployeeScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], EmployeeScalarWhereInput);
exports.EmployeeScalarWhereInput = EmployeeScalarWhereInput;
//# sourceMappingURL=employee-scalar-where.input.js.map