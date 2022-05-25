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
exports.CustomerAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const customer_where_input_1 = require("./customer-where.input");
const customer_order_by_with_relation_input_1 = require("./customer-order-by-with-relation.input");
const customer_where_unique_input_1 = require("./customer-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const customer_count_aggregate_input_1 = require("./customer-count-aggregate.input");
const customer_min_aggregate_input_1 = require("./customer-min-aggregate.input");
const customer_max_aggregate_input_1 = require("./customer-max-aggregate.input");
let CustomerAggregateArgs = class CustomerAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => customer_where_input_1.CustomerWhereInput, { nullable: true }),
    __metadata("design:type", customer_where_input_1.CustomerWhereInput)
], CustomerAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [customer_order_by_with_relation_input_1.CustomerOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], CustomerAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_where_unique_input_1.CustomerWhereUniqueInput, { nullable: true }),
    __metadata("design:type", customer_where_unique_input_1.CustomerWhereUniqueInput)
], CustomerAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CustomerAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CustomerAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_count_aggregate_input_1.CustomerCountAggregateInput, { nullable: true }),
    __metadata("design:type", customer_count_aggregate_input_1.CustomerCountAggregateInput)
], CustomerAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_min_aggregate_input_1.CustomerMinAggregateInput, { nullable: true }),
    __metadata("design:type", customer_min_aggregate_input_1.CustomerMinAggregateInput)
], CustomerAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_max_aggregate_input_1.CustomerMaxAggregateInput, { nullable: true }),
    __metadata("design:type", customer_max_aggregate_input_1.CustomerMaxAggregateInput)
], CustomerAggregateArgs.prototype, "_max", void 0);
CustomerAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CustomerAggregateArgs);
exports.CustomerAggregateArgs = CustomerAggregateArgs;
//# sourceMappingURL=customer-aggregate.args.js.map