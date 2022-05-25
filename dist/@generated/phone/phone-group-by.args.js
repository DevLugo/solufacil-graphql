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
exports.PhoneGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const phone_where_input_1 = require("./phone-where.input");
const phone_order_by_with_aggregation_input_1 = require("./phone-order-by-with-aggregation.input");
const phone_scalar_field_enum_1 = require("./phone-scalar-field.enum");
const phone_scalar_where_with_aggregates_input_1 = require("./phone-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const phone_count_aggregate_input_1 = require("./phone-count-aggregate.input");
const phone_min_aggregate_input_1 = require("./phone-min-aggregate.input");
const phone_max_aggregate_input_1 = require("./phone-max-aggregate.input");
let PhoneGroupByArgs = class PhoneGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => phone_where_input_1.PhoneWhereInput, { nullable: true }),
    __metadata("design:type", phone_where_input_1.PhoneWhereInput)
], PhoneGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_order_by_with_aggregation_input_1.PhoneOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_scalar_field_enum_1.PhoneScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], PhoneGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_scalar_where_with_aggregates_input_1.PhoneScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", phone_scalar_where_with_aggregates_input_1.PhoneScalarWhereWithAggregatesInput)
], PhoneGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], PhoneGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], PhoneGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_count_aggregate_input_1.PhoneCountAggregateInput, { nullable: true }),
    __metadata("design:type", phone_count_aggregate_input_1.PhoneCountAggregateInput)
], PhoneGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_min_aggregate_input_1.PhoneMinAggregateInput, { nullable: true }),
    __metadata("design:type", phone_min_aggregate_input_1.PhoneMinAggregateInput)
], PhoneGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_max_aggregate_input_1.PhoneMaxAggregateInput, { nullable: true }),
    __metadata("design:type", phone_max_aggregate_input_1.PhoneMaxAggregateInput)
], PhoneGroupByArgs.prototype, "_max", void 0);
PhoneGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], PhoneGroupByArgs);
exports.PhoneGroupByArgs = PhoneGroupByArgs;
//# sourceMappingURL=phone-group-by.args.js.map