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
exports.ContractTypeGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const contract_type_count_aggregate_output_1 = require("./contract-type-count-aggregate.output");
const contract_type_avg_aggregate_output_1 = require("./contract-type-avg-aggregate.output");
const contract_type_sum_aggregate_output_1 = require("./contract-type-sum-aggregate.output");
const contract_type_min_aggregate_output_1 = require("./contract-type-min-aggregate.output");
const contract_type_max_aggregate_output_1 = require("./contract-type-max-aggregate.output");
let ContractTypeGroupBy = class ContractTypeGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContractTypeGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContractTypeGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], ContractTypeGroupBy.prototype, "monthDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], ContractTypeGroupBy.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], ContractTypeGroupBy.prototype, "maxRate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ContractTypeGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ContractTypeGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_count_aggregate_output_1.ContractTypeCountAggregate, { nullable: true }),
    __metadata("design:type", contract_type_count_aggregate_output_1.ContractTypeCountAggregate)
], ContractTypeGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_avg_aggregate_output_1.ContractTypeAvgAggregate, { nullable: true }),
    __metadata("design:type", contract_type_avg_aggregate_output_1.ContractTypeAvgAggregate)
], ContractTypeGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_sum_aggregate_output_1.ContractTypeSumAggregate, { nullable: true }),
    __metadata("design:type", contract_type_sum_aggregate_output_1.ContractTypeSumAggregate)
], ContractTypeGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_min_aggregate_output_1.ContractTypeMinAggregate, { nullable: true }),
    __metadata("design:type", contract_type_min_aggregate_output_1.ContractTypeMinAggregate)
], ContractTypeGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_max_aggregate_output_1.ContractTypeMaxAggregate, { nullable: true }),
    __metadata("design:type", contract_type_max_aggregate_output_1.ContractTypeMaxAggregate)
], ContractTypeGroupBy.prototype, "_max", void 0);
ContractTypeGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], ContractTypeGroupBy);
exports.ContractTypeGroupBy = ContractTypeGroupBy;
//# sourceMappingURL=contract-type-group-by.output.js.map