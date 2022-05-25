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
exports.BorrowerGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const borrower_where_input_1 = require("./borrower-where.input");
const borrower_order_by_with_aggregation_input_1 = require("./borrower-order-by-with-aggregation.input");
const borrower_scalar_field_enum_1 = require("./borrower-scalar-field.enum");
const borrower_scalar_where_with_aggregates_input_1 = require("./borrower-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const borrower_count_aggregate_input_1 = require("./borrower-count-aggregate.input");
const borrower_min_aggregate_input_1 = require("./borrower-min-aggregate.input");
const borrower_max_aggregate_input_1 = require("./borrower-max-aggregate.input");
let BorrowerGroupByArgs = class BorrowerGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => borrower_where_input_1.BorrowerWhereInput, { nullable: true }),
    __metadata("design:type", borrower_where_input_1.BorrowerWhereInput)
], BorrowerGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [borrower_order_by_with_aggregation_input_1.BorrowerOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], BorrowerGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [borrower_scalar_field_enum_1.BorrowerScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], BorrowerGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_scalar_where_with_aggregates_input_1.BorrowerScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", borrower_scalar_where_with_aggregates_input_1.BorrowerScalarWhereWithAggregatesInput)
], BorrowerGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], BorrowerGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], BorrowerGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_count_aggregate_input_1.BorrowerCountAggregateInput, { nullable: true }),
    __metadata("design:type", borrower_count_aggregate_input_1.BorrowerCountAggregateInput)
], BorrowerGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_min_aggregate_input_1.BorrowerMinAggregateInput, { nullable: true }),
    __metadata("design:type", borrower_min_aggregate_input_1.BorrowerMinAggregateInput)
], BorrowerGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_max_aggregate_input_1.BorrowerMaxAggregateInput, { nullable: true }),
    __metadata("design:type", borrower_max_aggregate_input_1.BorrowerMaxAggregateInput)
], BorrowerGroupByArgs.prototype, "_max", void 0);
BorrowerGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], BorrowerGroupByArgs);
exports.BorrowerGroupByArgs = BorrowerGroupByArgs;
//# sourceMappingURL=borrower-group-by.args.js.map