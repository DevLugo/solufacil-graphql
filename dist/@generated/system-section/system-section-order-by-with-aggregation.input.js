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
exports.SystemSectionOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const system_section_count_order_by_aggregate_input_1 = require("./system-section-count-order-by-aggregate.input");
const system_section_max_order_by_aggregate_input_1 = require("./system-section-max-order-by-aggregate.input");
const system_section_min_order_by_aggregate_input_1 = require("./system-section-min-order-by-aggregate.input");
let SystemSectionOrderByWithAggregationInput = class SystemSectionOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SystemSectionOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SystemSectionOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SystemSectionOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], SystemSectionOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_count_order_by_aggregate_input_1.SystemSectionCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", system_section_count_order_by_aggregate_input_1.SystemSectionCountOrderByAggregateInput)
], SystemSectionOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_max_order_by_aggregate_input_1.SystemSectionMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", system_section_max_order_by_aggregate_input_1.SystemSectionMaxOrderByAggregateInput)
], SystemSectionOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_min_order_by_aggregate_input_1.SystemSectionMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", system_section_min_order_by_aggregate_input_1.SystemSectionMinOrderByAggregateInput)
], SystemSectionOrderByWithAggregationInput.prototype, "_min", void 0);
SystemSectionOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], SystemSectionOrderByWithAggregationInput);
exports.SystemSectionOrderByWithAggregationInput = SystemSectionOrderByWithAggregationInput;
//# sourceMappingURL=system-section-order-by-with-aggregation.input.js.map