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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employees_types_enum_1 = require("../prisma/employees-types.enum");
const employee_count_aggregate_output_1 = require("./employee-count-aggregate.output");
const employee_min_aggregate_output_1 = require("./employee-min-aggregate.output");
const employee_max_aggregate_output_1 = require("./employee-max-aggregate.output");
let EmployeeGroupBy = class EmployeeGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], EmployeeGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => employees_types_enum_1.EmployeesTypes, { nullable: false }),
    __metadata("design:type", Object)
], EmployeeGroupBy.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], EmployeeGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], EmployeeGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], EmployeeGroupBy.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_count_aggregate_output_1.EmployeeCountAggregate, { nullable: true }),
    __metadata("design:type", employee_count_aggregate_output_1.EmployeeCountAggregate)
], EmployeeGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_min_aggregate_output_1.EmployeeMinAggregate, { nullable: true }),
    __metadata("design:type", employee_min_aggregate_output_1.EmployeeMinAggregate)
], EmployeeGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_max_aggregate_output_1.EmployeeMaxAggregate, { nullable: true }),
    __metadata("design:type", employee_max_aggregate_output_1.EmployeeMaxAggregate)
], EmployeeGroupBy.prototype, "_max", void 0);
EmployeeGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], EmployeeGroupBy);
exports.EmployeeGroupBy = EmployeeGroupBy;
//# sourceMappingURL=employee-group-by.output.js.map