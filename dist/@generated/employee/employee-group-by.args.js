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
exports.EmployeeGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employee_where_input_1 = require("./employee-where.input");
const employee_order_by_with_aggregation_input_1 = require("./employee-order-by-with-aggregation.input");
const employee_scalar_field_enum_1 = require("./employee-scalar-field.enum");
const employee_scalar_where_with_aggregates_input_1 = require("./employee-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const employee_count_aggregate_input_1 = require("./employee-count-aggregate.input");
const employee_min_aggregate_input_1 = require("./employee-min-aggregate.input");
const employee_max_aggregate_input_1 = require("./employee-max-aggregate.input");
let EmployeeGroupByArgs = class EmployeeGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => employee_where_input_1.EmployeeWhereInput, { nullable: true }),
    __metadata("design:type", employee_where_input_1.EmployeeWhereInput)
], EmployeeGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employee_order_by_with_aggregation_input_1.EmployeeOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employee_scalar_field_enum_1.EmployeeScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], EmployeeGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_scalar_where_with_aggregates_input_1.EmployeeScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", employee_scalar_where_with_aggregates_input_1.EmployeeScalarWhereWithAggregatesInput)
], EmployeeGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], EmployeeGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], EmployeeGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_count_aggregate_input_1.EmployeeCountAggregateInput, { nullable: true }),
    __metadata("design:type", employee_count_aggregate_input_1.EmployeeCountAggregateInput)
], EmployeeGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_min_aggregate_input_1.EmployeeMinAggregateInput, { nullable: true }),
    __metadata("design:type", employee_min_aggregate_input_1.EmployeeMinAggregateInput)
], EmployeeGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_max_aggregate_input_1.EmployeeMaxAggregateInput, { nullable: true }),
    __metadata("design:type", employee_max_aggregate_input_1.EmployeeMaxAggregateInput)
], EmployeeGroupByArgs.prototype, "_max", void 0);
EmployeeGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], EmployeeGroupByArgs);
exports.EmployeeGroupByArgs = EmployeeGroupByArgs;
//# sourceMappingURL=employee-group-by.args.js.map