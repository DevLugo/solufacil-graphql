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
exports.ContractTypeGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_type_where_input_1 = require("./contract-type-where.input");
const contract_type_order_by_with_aggregation_input_1 = require("./contract-type-order-by-with-aggregation.input");
const contract_type_scalar_field_enum_1 = require("./contract-type-scalar-field.enum");
const contract_type_scalar_where_with_aggregates_input_1 = require("./contract-type-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const contract_type_count_aggregate_input_1 = require("./contract-type-count-aggregate.input");
const contract_type_avg_aggregate_input_1 = require("./contract-type-avg-aggregate.input");
const contract_type_sum_aggregate_input_1 = require("./contract-type-sum-aggregate.input");
const contract_type_min_aggregate_input_1 = require("./contract-type-min-aggregate.input");
const contract_type_max_aggregate_input_1 = require("./contract-type-max-aggregate.input");
let ContractTypeGroupByArgs = class ContractTypeGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => contract_type_where_input_1.ContractTypeWhereInput, { nullable: true }),
    __metadata("design:type", contract_type_where_input_1.ContractTypeWhereInput)
], ContractTypeGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_type_order_by_with_aggregation_input_1.ContractTypeOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractTypeGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_type_scalar_field_enum_1.ContractTypeScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], ContractTypeGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_scalar_where_with_aggregates_input_1.ContractTypeScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", contract_type_scalar_where_with_aggregates_input_1.ContractTypeScalarWhereWithAggregatesInput)
], ContractTypeGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ContractTypeGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ContractTypeGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_count_aggregate_input_1.ContractTypeCountAggregateInput, { nullable: true }),
    __metadata("design:type", contract_type_count_aggregate_input_1.ContractTypeCountAggregateInput)
], ContractTypeGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_avg_aggregate_input_1.ContractTypeAvgAggregateInput, { nullable: true }),
    __metadata("design:type", contract_type_avg_aggregate_input_1.ContractTypeAvgAggregateInput)
], ContractTypeGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_sum_aggregate_input_1.ContractTypeSumAggregateInput, { nullable: true }),
    __metadata("design:type", contract_type_sum_aggregate_input_1.ContractTypeSumAggregateInput)
], ContractTypeGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_min_aggregate_input_1.ContractTypeMinAggregateInput, { nullable: true }),
    __metadata("design:type", contract_type_min_aggregate_input_1.ContractTypeMinAggregateInput)
], ContractTypeGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_max_aggregate_input_1.ContractTypeMaxAggregateInput, { nullable: true }),
    __metadata("design:type", contract_type_max_aggregate_input_1.ContractTypeMaxAggregateInput)
], ContractTypeGroupByArgs.prototype, "_max", void 0);
ContractTypeGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ContractTypeGroupByArgs);
exports.ContractTypeGroupByArgs = ContractTypeGroupByArgs;
//# sourceMappingURL=contract-type-group-by.args.js.map