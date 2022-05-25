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
exports.ContractGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_where_input_1 = require("./contract-where.input");
const contract_order_by_with_aggregation_input_1 = require("./contract-order-by-with-aggregation.input");
const contract_scalar_field_enum_1 = require("./contract-scalar-field.enum");
const contract_scalar_where_with_aggregates_input_1 = require("./contract-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const contract_count_aggregate_input_1 = require("./contract-count-aggregate.input");
const contract_min_aggregate_input_1 = require("./contract-min-aggregate.input");
const contract_max_aggregate_input_1 = require("./contract-max-aggregate.input");
let ContractGroupByArgs = class ContractGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => contract_where_input_1.ContractWhereInput, { nullable: true }),
    __metadata("design:type", contract_where_input_1.ContractWhereInput)
], ContractGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_order_by_with_aggregation_input_1.ContractOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_scalar_field_enum_1.ContractScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], ContractGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_scalar_where_with_aggregates_input_1.ContractScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", contract_scalar_where_with_aggregates_input_1.ContractScalarWhereWithAggregatesInput)
], ContractGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ContractGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ContractGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_count_aggregate_input_1.ContractCountAggregateInput, { nullable: true }),
    __metadata("design:type", contract_count_aggregate_input_1.ContractCountAggregateInput)
], ContractGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_min_aggregate_input_1.ContractMinAggregateInput, { nullable: true }),
    __metadata("design:type", contract_min_aggregate_input_1.ContractMinAggregateInput)
], ContractGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_max_aggregate_input_1.ContractMaxAggregateInput, { nullable: true }),
    __metadata("design:type", contract_max_aggregate_input_1.ContractMaxAggregateInput)
], ContractGroupByArgs.prototype, "_max", void 0);
ContractGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ContractGroupByArgs);
exports.ContractGroupByArgs = ContractGroupByArgs;
//# sourceMappingURL=contract-group-by.args.js.map