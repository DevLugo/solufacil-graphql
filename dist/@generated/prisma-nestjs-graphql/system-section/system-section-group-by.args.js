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
exports.SystemSectionGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const system_section_where_input_1 = require("./system-section-where.input");
const system_section_order_by_with_aggregation_input_1 = require("./system-section-order-by-with-aggregation.input");
const system_section_scalar_field_enum_1 = require("./system-section-scalar-field.enum");
const system_section_scalar_where_with_aggregates_input_1 = require("./system-section-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const system_section_count_aggregate_input_1 = require("./system-section-count-aggregate.input");
const system_section_min_aggregate_input_1 = require("./system-section-min-aggregate.input");
const system_section_max_aggregate_input_1 = require("./system-section-max-aggregate.input");
let SystemSectionGroupByArgs = class SystemSectionGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => system_section_where_input_1.SystemSectionWhereInput, { nullable: true }),
    __metadata("design:type", system_section_where_input_1.SystemSectionWhereInput)
], SystemSectionGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [system_section_order_by_with_aggregation_input_1.SystemSectionOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], SystemSectionGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [system_section_scalar_field_enum_1.SystemSectionScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], SystemSectionGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_scalar_where_with_aggregates_input_1.SystemSectionScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", system_section_scalar_where_with_aggregates_input_1.SystemSectionScalarWhereWithAggregatesInput)
], SystemSectionGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], SystemSectionGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], SystemSectionGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_count_aggregate_input_1.SystemSectionCountAggregateInput, { nullable: true }),
    __metadata("design:type", system_section_count_aggregate_input_1.SystemSectionCountAggregateInput)
], SystemSectionGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_min_aggregate_input_1.SystemSectionMinAggregateInput, { nullable: true }),
    __metadata("design:type", system_section_min_aggregate_input_1.SystemSectionMinAggregateInput)
], SystemSectionGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_max_aggregate_input_1.SystemSectionMaxAggregateInput, { nullable: true }),
    __metadata("design:type", system_section_max_aggregate_input_1.SystemSectionMaxAggregateInput)
], SystemSectionGroupByArgs.prototype, "_max", void 0);
SystemSectionGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], SystemSectionGroupByArgs);
exports.SystemSectionGroupByArgs = SystemSectionGroupByArgs;
//# sourceMappingURL=system-section-group-by.args.js.map