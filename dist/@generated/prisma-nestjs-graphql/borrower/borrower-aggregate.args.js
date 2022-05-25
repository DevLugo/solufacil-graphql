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
exports.BorrowerAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const borrower_where_input_1 = require("./borrower-where.input");
const borrower_order_by_with_relation_input_1 = require("./borrower-order-by-with-relation.input");
const borrower_where_unique_input_1 = require("./borrower-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const borrower_count_aggregate_input_1 = require("./borrower-count-aggregate.input");
const borrower_min_aggregate_input_1 = require("./borrower-min-aggregate.input");
const borrower_max_aggregate_input_1 = require("./borrower-max-aggregate.input");
let BorrowerAggregateArgs = class BorrowerAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => borrower_where_input_1.BorrowerWhereInput, { nullable: true }),
    __metadata("design:type", borrower_where_input_1.BorrowerWhereInput)
], BorrowerAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [borrower_order_by_with_relation_input_1.BorrowerOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], BorrowerAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_where_unique_input_1.BorrowerWhereUniqueInput, { nullable: true }),
    __metadata("design:type", borrower_where_unique_input_1.BorrowerWhereUniqueInput)
], BorrowerAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], BorrowerAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], BorrowerAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_count_aggregate_input_1.BorrowerCountAggregateInput, { nullable: true }),
    __metadata("design:type", borrower_count_aggregate_input_1.BorrowerCountAggregateInput)
], BorrowerAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_min_aggregate_input_1.BorrowerMinAggregateInput, { nullable: true }),
    __metadata("design:type", borrower_min_aggregate_input_1.BorrowerMinAggregateInput)
], BorrowerAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_max_aggregate_input_1.BorrowerMaxAggregateInput, { nullable: true }),
    __metadata("design:type", borrower_max_aggregate_input_1.BorrowerMaxAggregateInput)
], BorrowerAggregateArgs.prototype, "_max", void 0);
BorrowerAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], BorrowerAggregateArgs);
exports.BorrowerAggregateArgs = BorrowerAggregateArgs;
//# sourceMappingURL=borrower-aggregate.args.js.map