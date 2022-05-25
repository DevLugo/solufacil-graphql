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
exports.AvalAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const aval_where_input_1 = require("./aval-where.input");
const aval_order_by_with_relation_input_1 = require("./aval-order-by-with-relation.input");
const aval_where_unique_input_1 = require("./aval-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const aval_count_aggregate_input_1 = require("./aval-count-aggregate.input");
const aval_min_aggregate_input_1 = require("./aval-min-aggregate.input");
const aval_max_aggregate_input_1 = require("./aval-max-aggregate.input");
let AvalAggregateArgs = class AvalAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => aval_where_input_1.AvalWhereInput, { nullable: true }),
    __metadata("design:type", aval_where_input_1.AvalWhereInput)
], AvalAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [aval_order_by_with_relation_input_1.AvalOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], AvalAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_where_unique_input_1.AvalWhereUniqueInput, { nullable: true }),
    __metadata("design:type", aval_where_unique_input_1.AvalWhereUniqueInput)
], AvalAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], AvalAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], AvalAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_count_aggregate_input_1.AvalCountAggregateInput, { nullable: true }),
    __metadata("design:type", aval_count_aggregate_input_1.AvalCountAggregateInput)
], AvalAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_min_aggregate_input_1.AvalMinAggregateInput, { nullable: true }),
    __metadata("design:type", aval_min_aggregate_input_1.AvalMinAggregateInput)
], AvalAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_max_aggregate_input_1.AvalMaxAggregateInput, { nullable: true }),
    __metadata("design:type", aval_max_aggregate_input_1.AvalMaxAggregateInput)
], AvalAggregateArgs.prototype, "_max", void 0);
AvalAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], AvalAggregateArgs);
exports.AvalAggregateArgs = AvalAggregateArgs;
//# sourceMappingURL=aval-aggregate.args.js.map