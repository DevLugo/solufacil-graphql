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
exports.LogGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_where_input_1 = require("./log-where.input");
const log_order_by_with_aggregation_input_1 = require("./log-order-by-with-aggregation.input");
const log_scalar_field_enum_1 = require("./log-scalar-field.enum");
const log_scalar_where_with_aggregates_input_1 = require("./log-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const log_count_aggregate_input_1 = require("./log-count-aggregate.input");
const log_min_aggregate_input_1 = require("./log-min-aggregate.input");
const log_max_aggregate_input_1 = require("./log-max-aggregate.input");
let LogGroupByArgs = class LogGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => log_where_input_1.LogWhereInput, { nullable: true }),
    __metadata("design:type", log_where_input_1.LogWhereInput)
], LogGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_order_by_with_aggregation_input_1.LogOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], LogGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_scalar_field_enum_1.LogScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], LogGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_scalar_where_with_aggregates_input_1.LogScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", log_scalar_where_with_aggregates_input_1.LogScalarWhereWithAggregatesInput)
], LogGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LogGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LogGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_count_aggregate_input_1.LogCountAggregateInput, { nullable: true }),
    __metadata("design:type", log_count_aggregate_input_1.LogCountAggregateInput)
], LogGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_min_aggregate_input_1.LogMinAggregateInput, { nullable: true }),
    __metadata("design:type", log_min_aggregate_input_1.LogMinAggregateInput)
], LogGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_max_aggregate_input_1.LogMaxAggregateInput, { nullable: true }),
    __metadata("design:type", log_max_aggregate_input_1.LogMaxAggregateInput)
], LogGroupByArgs.prototype, "_max", void 0);
LogGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], LogGroupByArgs);
exports.LogGroupByArgs = LogGroupByArgs;
//# sourceMappingURL=log-group-by.args.js.map