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
exports.CustomerGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const customer_where_input_1 = require("./customer-where.input");
const customer_order_by_with_aggregation_input_1 = require("./customer-order-by-with-aggregation.input");
const customer_scalar_field_enum_1 = require("./customer-scalar-field.enum");
const customer_scalar_where_with_aggregates_input_1 = require("./customer-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const customer_count_aggregate_input_1 = require("./customer-count-aggregate.input");
const customer_min_aggregate_input_1 = require("./customer-min-aggregate.input");
const customer_max_aggregate_input_1 = require("./customer-max-aggregate.input");
let CustomerGroupByArgs = class CustomerGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => customer_where_input_1.CustomerWhereInput, { nullable: true }),
    __metadata("design:type", customer_where_input_1.CustomerWhereInput)
], CustomerGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [customer_order_by_with_aggregation_input_1.CustomerOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], CustomerGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [customer_scalar_field_enum_1.CustomerScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], CustomerGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_scalar_where_with_aggregates_input_1.CustomerScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", customer_scalar_where_with_aggregates_input_1.CustomerScalarWhereWithAggregatesInput)
], CustomerGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CustomerGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CustomerGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_count_aggregate_input_1.CustomerCountAggregateInput, { nullable: true }),
    __metadata("design:type", customer_count_aggregate_input_1.CustomerCountAggregateInput)
], CustomerGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_min_aggregate_input_1.CustomerMinAggregateInput, { nullable: true }),
    __metadata("design:type", customer_min_aggregate_input_1.CustomerMinAggregateInput)
], CustomerGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_max_aggregate_input_1.CustomerMaxAggregateInput, { nullable: true }),
    __metadata("design:type", customer_max_aggregate_input_1.CustomerMaxAggregateInput)
], CustomerGroupByArgs.prototype, "_max", void 0);
CustomerGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CustomerGroupByArgs);
exports.CustomerGroupByArgs = CustomerGroupByArgs;
//# sourceMappingURL=customer-group-by.args.js.map