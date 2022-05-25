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
exports.FindManyEmployeeArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employee_where_input_1 = require("./employee-where.input");
const employee_order_by_with_relation_input_1 = require("./employee-order-by-with-relation.input");
const employee_where_unique_input_1 = require("./employee-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const employee_scalar_field_enum_1 = require("./employee-scalar-field.enum");
let FindManyEmployeeArgs = class FindManyEmployeeArgs {
};
__decorate([
    (0, graphql_1.Field)(() => employee_where_input_1.EmployeeWhereInput, { nullable: true }),
    __metadata("design:type", employee_where_input_1.EmployeeWhereInput)
], FindManyEmployeeArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employee_order_by_with_relation_input_1.EmployeeOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyEmployeeArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_where_unique_input_1.EmployeeWhereUniqueInput, { nullable: true }),
    __metadata("design:type", employee_where_unique_input_1.EmployeeWhereUniqueInput)
], FindManyEmployeeArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyEmployeeArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyEmployeeArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employee_scalar_field_enum_1.EmployeeScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyEmployeeArgs.prototype, "distinct", void 0);
FindManyEmployeeArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyEmployeeArgs);
exports.FindManyEmployeeArgs = FindManyEmployeeArgs;
//# sourceMappingURL=find-many-employee.args.js.map