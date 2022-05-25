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
var NestedEnumEmployeesTypesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEmployeesTypesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employees_types_enum_1 = require("./employees-types.enum");
let NestedEnumEmployeesTypesFilter = NestedEnumEmployeesTypesFilter_1 = class NestedEnumEmployeesTypesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => employees_types_enum_1.EmployeesTypes, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumEmployeesTypesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employees_types_enum_1.EmployeesTypes], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumEmployeesTypesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employees_types_enum_1.EmployeesTypes], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumEmployeesTypesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumEmployeesTypesFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumEmployeesTypesFilter)
], NestedEnumEmployeesTypesFilter.prototype, "not", void 0);
NestedEnumEmployeesTypesFilter = NestedEnumEmployeesTypesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumEmployeesTypesFilter);
exports.NestedEnumEmployeesTypesFilter = NestedEnumEmployeesTypesFilter;
//# sourceMappingURL=nested-enum-employees-types-filter.input.js.map