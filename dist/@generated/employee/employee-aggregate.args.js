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
exports.EmployeeAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employee_where_input_1 = require("./employee-where.input");
const employee_order_by_with_relation_input_1 = require("./employee-order-by-with-relation.input");
const employee_where_unique_input_1 = require("./employee-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const employee_count_aggregate_input_1 = require("./employee-count-aggregate.input");
const employee_min_aggregate_input_1 = require("./employee-min-aggregate.input");
const employee_max_aggregate_input_1 = require("./employee-max-aggregate.input");
let EmployeeAggregateArgs = class EmployeeAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => employee_where_input_1.EmployeeWhereInput, { nullable: true }),
    __metadata("design:type", employee_where_input_1.EmployeeWhereInput)
], EmployeeAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employee_order_by_with_relation_input_1.EmployeeOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_where_unique_input_1.EmployeeWhereUniqueInput, { nullable: true }),
    __metadata("design:type", employee_where_unique_input_1.EmployeeWhereUniqueInput)
], EmployeeAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], EmployeeAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], EmployeeAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_count_aggregate_input_1.EmployeeCountAggregateInput, { nullable: true }),
    __metadata("design:type", employee_count_aggregate_input_1.EmployeeCountAggregateInput)
], EmployeeAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_min_aggregate_input_1.EmployeeMinAggregateInput, { nullable: true }),
    __metadata("design:type", employee_min_aggregate_input_1.EmployeeMinAggregateInput)
], EmployeeAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_max_aggregate_input_1.EmployeeMaxAggregateInput, { nullable: true }),
    __metadata("design:type", employee_max_aggregate_input_1.EmployeeMaxAggregateInput)
], EmployeeAggregateArgs.prototype, "_max", void 0);
EmployeeAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], EmployeeAggregateArgs);
exports.EmployeeAggregateArgs = EmployeeAggregateArgs;
//# sourceMappingURL=employee-aggregate.args.js.map