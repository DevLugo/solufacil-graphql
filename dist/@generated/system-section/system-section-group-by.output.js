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
exports.SystemSectionGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const system_section_count_aggregate_output_1 = require("./system-section-count-aggregate.output");
const system_section_min_aggregate_output_1 = require("./system-section-min-aggregate.output");
const system_section_max_aggregate_output_1 = require("./system-section-max-aggregate.output");
let SystemSectionGroupBy = class SystemSectionGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SystemSectionGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SystemSectionGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], SystemSectionGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], SystemSectionGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_count_aggregate_output_1.SystemSectionCountAggregate, { nullable: true }),
    __metadata("design:type", system_section_count_aggregate_output_1.SystemSectionCountAggregate)
], SystemSectionGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_min_aggregate_output_1.SystemSectionMinAggregate, { nullable: true }),
    __metadata("design:type", system_section_min_aggregate_output_1.SystemSectionMinAggregate)
], SystemSectionGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_max_aggregate_output_1.SystemSectionMaxAggregate, { nullable: true }),
    __metadata("design:type", system_section_max_aggregate_output_1.SystemSectionMaxAggregate)
], SystemSectionGroupBy.prototype, "_max", void 0);
SystemSectionGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], SystemSectionGroupBy);
exports.SystemSectionGroupBy = SystemSectionGroupBy;
//# sourceMappingURL=system-section-group-by.output.js.map