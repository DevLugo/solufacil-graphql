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
exports.AggregateContractType = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_type_count_aggregate_output_1 = require("./contract-type-count-aggregate.output");
const contract_type_avg_aggregate_output_1 = require("./contract-type-avg-aggregate.output");
const contract_type_sum_aggregate_output_1 = require("./contract-type-sum-aggregate.output");
const contract_type_min_aggregate_output_1 = require("./contract-type-min-aggregate.output");
const contract_type_max_aggregate_output_1 = require("./contract-type-max-aggregate.output");
let AggregateContractType = class AggregateContractType {
};
__decorate([
    (0, graphql_1.Field)(() => contract_type_count_aggregate_output_1.ContractTypeCountAggregate, { nullable: true }),
    __metadata("design:type", contract_type_count_aggregate_output_1.ContractTypeCountAggregate)
], AggregateContractType.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_avg_aggregate_output_1.ContractTypeAvgAggregate, { nullable: true }),
    __metadata("design:type", contract_type_avg_aggregate_output_1.ContractTypeAvgAggregate)
], AggregateContractType.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_sum_aggregate_output_1.ContractTypeSumAggregate, { nullable: true }),
    __metadata("design:type", contract_type_sum_aggregate_output_1.ContractTypeSumAggregate)
], AggregateContractType.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_min_aggregate_output_1.ContractTypeMinAggregate, { nullable: true }),
    __metadata("design:type", contract_type_min_aggregate_output_1.ContractTypeMinAggregate)
], AggregateContractType.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_max_aggregate_output_1.ContractTypeMaxAggregate, { nullable: true }),
    __metadata("design:type", contract_type_max_aggregate_output_1.ContractTypeMaxAggregate)
], AggregateContractType.prototype, "_max", void 0);
AggregateContractType = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateContractType);
exports.AggregateContractType = AggregateContractType;
//# sourceMappingURL=aggregate-contract-type.output.js.map