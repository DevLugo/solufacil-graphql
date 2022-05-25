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
var NestedEnumEmployeesTypesWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEmployeesTypesWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employees_types_enum_1 = require("./employees-types.enum");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_employees_types_filter_input_1 = require("./nested-enum-employees-types-filter.input");
let NestedEnumEmployeesTypesWithAggregatesFilter = NestedEnumEmployeesTypesWithAggregatesFilter_1 = class NestedEnumEmployeesTypesWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => employees_types_enum_1.EmployeesTypes, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumEmployeesTypesWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employees_types_enum_1.EmployeesTypes], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumEmployeesTypesWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employees_types_enum_1.EmployeesTypes], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumEmployeesTypesWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumEmployeesTypesWithAggregatesFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumEmployeesTypesWithAggregatesFilter)
], NestedEnumEmployeesTypesWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    __metadata("design:type", nested_int_filter_input_1.NestedIntFilter)
], NestedEnumEmployeesTypesWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_employees_types_filter_input_1.NestedEnumEmployeesTypesFilter, { nullable: true }),
    __metadata("design:type", nested_enum_employees_types_filter_input_1.NestedEnumEmployeesTypesFilter)
], NestedEnumEmployeesTypesWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_employees_types_filter_input_1.NestedEnumEmployeesTypesFilter, { nullable: true }),
    __metadata("design:type", nested_enum_employees_types_filter_input_1.NestedEnumEmployeesTypesFilter)
], NestedEnumEmployeesTypesWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEmployeesTypesWithAggregatesFilter = NestedEnumEmployeesTypesWithAggregatesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumEmployeesTypesWithAggregatesFilter);
exports.NestedEnumEmployeesTypesWithAggregatesFilter = NestedEnumEmployeesTypesWithAggregatesFilter;
//# sourceMappingURL=nested-enum-employees-types-with-aggregates-filter.input.js.map