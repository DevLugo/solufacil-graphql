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
exports.SystemSectionAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const system_section_where_input_1 = require("./system-section-where.input");
const system_section_order_by_with_relation_input_1 = require("./system-section-order-by-with-relation.input");
const system_section_where_unique_input_1 = require("./system-section-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const system_section_count_aggregate_input_1 = require("./system-section-count-aggregate.input");
const system_section_min_aggregate_input_1 = require("./system-section-min-aggregate.input");
const system_section_max_aggregate_input_1 = require("./system-section-max-aggregate.input");
let SystemSectionAggregateArgs = class SystemSectionAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => system_section_where_input_1.SystemSectionWhereInput, { nullable: true }),
    __metadata("design:type", system_section_where_input_1.SystemSectionWhereInput)
], SystemSectionAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [system_section_order_by_with_relation_input_1.SystemSectionOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], SystemSectionAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_where_unique_input_1.SystemSectionWhereUniqueInput, { nullable: true }),
    __metadata("design:type", system_section_where_unique_input_1.SystemSectionWhereUniqueInput)
], SystemSectionAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], SystemSectionAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], SystemSectionAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_count_aggregate_input_1.SystemSectionCountAggregateInput, { nullable: true }),
    __metadata("design:type", system_section_count_aggregate_input_1.SystemSectionCountAggregateInput)
], SystemSectionAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_min_aggregate_input_1.SystemSectionMinAggregateInput, { nullable: true }),
    __metadata("design:type", system_section_min_aggregate_input_1.SystemSectionMinAggregateInput)
], SystemSectionAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_max_aggregate_input_1.SystemSectionMaxAggregateInput, { nullable: true }),
    __metadata("design:type", system_section_max_aggregate_input_1.SystemSectionMaxAggregateInput)
], SystemSectionAggregateArgs.prototype, "_max", void 0);
SystemSectionAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], SystemSectionAggregateArgs);
exports.SystemSectionAggregateArgs = SystemSectionAggregateArgs;
//# sourceMappingURL=system-section-aggregate.args.js.map