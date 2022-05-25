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
exports.UserGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_where_input_1 = require("./user-where.input");
const user_order_by_with_aggregation_input_1 = require("./user-order-by-with-aggregation.input");
const user_scalar_field_enum_1 = require("./user-scalar-field.enum");
const user_scalar_where_with_aggregates_input_1 = require("./user-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const user_count_aggregate_input_1 = require("./user-count-aggregate.input");
const user_min_aggregate_input_1 = require("./user-min-aggregate.input");
const user_max_aggregate_input_1 = require("./user-max-aggregate.input");
let UserGroupByArgs = class UserGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    __metadata("design:type", user_where_input_1.UserWhereInput)
], UserGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_order_by_with_aggregation_input_1.UserOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], UserGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_scalar_field_enum_1.UserScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], UserGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_scalar_where_with_aggregates_input_1.UserScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", user_scalar_where_with_aggregates_input_1.UserScalarWhereWithAggregatesInput)
], UserGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], UserGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], UserGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_count_aggregate_input_1.UserCountAggregateInput, { nullable: true }),
    __metadata("design:type", user_count_aggregate_input_1.UserCountAggregateInput)
], UserGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_min_aggregate_input_1.UserMinAggregateInput, { nullable: true }),
    __metadata("design:type", user_min_aggregate_input_1.UserMinAggregateInput)
], UserGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_max_aggregate_input_1.UserMaxAggregateInput, { nullable: true }),
    __metadata("design:type", user_max_aggregate_input_1.UserMaxAggregateInput)
], UserGroupByArgs.prototype, "_max", void 0);
UserGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UserGroupByArgs);
exports.UserGroupByArgs = UserGroupByArgs;
//# sourceMappingURL=user-group-by.args.js.map