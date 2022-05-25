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
exports.ContractTypeAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_type_where_input_1 = require("./contract-type-where.input");
const contract_type_order_by_with_relation_input_1 = require("./contract-type-order-by-with-relation.input");
const contract_type_where_unique_input_1 = require("./contract-type-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const contract_type_count_aggregate_input_1 = require("./contract-type-count-aggregate.input");
const contract_type_avg_aggregate_input_1 = require("./contract-type-avg-aggregate.input");
const contract_type_sum_aggregate_input_1 = require("./contract-type-sum-aggregate.input");
const contract_type_min_aggregate_input_1 = require("./contract-type-min-aggregate.input");
const contract_type_max_aggregate_input_1 = require("./contract-type-max-aggregate.input");
let ContractTypeAggregateArgs = class ContractTypeAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => contract_type_where_input_1.ContractTypeWhereInput, { nullable: true }),
    __metadata("design:type", contract_type_where_input_1.ContractTypeWhereInput)
], ContractTypeAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_type_order_by_with_relation_input_1.ContractTypeOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractTypeAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_where_unique_input_1.ContractTypeWhereUniqueInput, { nullable: true }),
    __metadata("design:type", contract_type_where_unique_input_1.ContractTypeWhereUniqueInput)
], ContractTypeAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ContractTypeAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ContractTypeAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_count_aggregate_input_1.ContractTypeCountAggregateInput, { nullable: true }),
    __metadata("design:type", contract_type_count_aggregate_input_1.ContractTypeCountAggregateInput)
], ContractTypeAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_avg_aggregate_input_1.ContractTypeAvgAggregateInput, { nullable: true }),
    __metadata("design:type", contract_type_avg_aggregate_input_1.ContractTypeAvgAggregateInput)
], ContractTypeAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_sum_aggregate_input_1.ContractTypeSumAggregateInput, { nullable: true }),
    __metadata("design:type", contract_type_sum_aggregate_input_1.ContractTypeSumAggregateInput)
], ContractTypeAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_min_aggregate_input_1.ContractTypeMinAggregateInput, { nullable: true }),
    __metadata("design:type", contract_type_min_aggregate_input_1.ContractTypeMinAggregateInput)
], ContractTypeAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_max_aggregate_input_1.ContractTypeMaxAggregateInput, { nullable: true }),
    __metadata("design:type", contract_type_max_aggregate_input_1.ContractTypeMaxAggregateInput)
], ContractTypeAggregateArgs.prototype, "_max", void 0);
ContractTypeAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ContractTypeAggregateArgs);
exports.ContractTypeAggregateArgs = ContractTypeAggregateArgs;
//# sourceMappingURL=contract-type-aggregate.args.js.map