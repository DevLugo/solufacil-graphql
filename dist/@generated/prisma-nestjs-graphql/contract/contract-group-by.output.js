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
exports.ContractGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_count_aggregate_output_1 = require("./contract-count-aggregate.output");
const contract_min_aggregate_output_1 = require("./contract-min-aggregate.output");
const contract_max_aggregate_output_1 = require("./contract-max-aggregate.output");
let ContractGroupBy = class ContractGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContractGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContractGroupBy.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ContractGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ContractGroupBy.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ContractGroupBy.prototype, "signDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ContractGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContractGroupBy.prototype, "contractTypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContractGroupBy.prototype, "loanLeadId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContractGroupBy.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_count_aggregate_output_1.ContractCountAggregate, { nullable: true }),
    __metadata("design:type", contract_count_aggregate_output_1.ContractCountAggregate)
], ContractGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_min_aggregate_output_1.ContractMinAggregate, { nullable: true }),
    __metadata("design:type", contract_min_aggregate_output_1.ContractMinAggregate)
], ContractGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_max_aggregate_output_1.ContractMaxAggregate, { nullable: true }),
    __metadata("design:type", contract_max_aggregate_output_1.ContractMaxAggregate)
], ContractGroupBy.prototype, "_max", void 0);
ContractGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], ContractGroupBy);
exports.ContractGroupBy = ContractGroupBy;
//# sourceMappingURL=contract-group-by.output.js.map