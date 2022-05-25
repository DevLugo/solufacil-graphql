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
exports.ContractAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_where_input_1 = require("./contract-where.input");
const contract_order_by_with_relation_input_1 = require("./contract-order-by-with-relation.input");
const contract_where_unique_input_1 = require("./contract-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const contract_count_aggregate_input_1 = require("./contract-count-aggregate.input");
const contract_min_aggregate_input_1 = require("./contract-min-aggregate.input");
const contract_max_aggregate_input_1 = require("./contract-max-aggregate.input");
let ContractAggregateArgs = class ContractAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => contract_where_input_1.ContractWhereInput, { nullable: true }),
    __metadata("design:type", contract_where_input_1.ContractWhereInput)
], ContractAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_order_by_with_relation_input_1.ContractOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_where_unique_input_1.ContractWhereUniqueInput, { nullable: true }),
    __metadata("design:type", contract_where_unique_input_1.ContractWhereUniqueInput)
], ContractAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ContractAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ContractAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_count_aggregate_input_1.ContractCountAggregateInput, { nullable: true }),
    __metadata("design:type", contract_count_aggregate_input_1.ContractCountAggregateInput)
], ContractAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_min_aggregate_input_1.ContractMinAggregateInput, { nullable: true }),
    __metadata("design:type", contract_min_aggregate_input_1.ContractMinAggregateInput)
], ContractAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_max_aggregate_input_1.ContractMaxAggregateInput, { nullable: true }),
    __metadata("design:type", contract_max_aggregate_input_1.ContractMaxAggregateInput)
], ContractAggregateArgs.prototype, "_max", void 0);
ContractAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ContractAggregateArgs);
exports.ContractAggregateArgs = ContractAggregateArgs;
//# sourceMappingURL=contract-aggregate.args.js.map