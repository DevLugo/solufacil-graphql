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
exports.AggregateSystemSection = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const system_section_count_aggregate_output_1 = require("./system-section-count-aggregate.output");
const system_section_min_aggregate_output_1 = require("./system-section-min-aggregate.output");
const system_section_max_aggregate_output_1 = require("./system-section-max-aggregate.output");
let AggregateSystemSection = class AggregateSystemSection {
};
__decorate([
    (0, graphql_1.Field)(() => system_section_count_aggregate_output_1.SystemSectionCountAggregate, { nullable: true }),
    __metadata("design:type", system_section_count_aggregate_output_1.SystemSectionCountAggregate)
], AggregateSystemSection.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_min_aggregate_output_1.SystemSectionMinAggregate, { nullable: true }),
    __metadata("design:type", system_section_min_aggregate_output_1.SystemSectionMinAggregate)
], AggregateSystemSection.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_max_aggregate_output_1.SystemSectionMaxAggregate, { nullable: true }),
    __metadata("design:type", system_section_max_aggregate_output_1.SystemSectionMaxAggregate)
], AggregateSystemSection.prototype, "_max", void 0);
AggregateSystemSection = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateSystemSection);
exports.AggregateSystemSection = AggregateSystemSection;
//# sourceMappingURL=aggregate-system-section.output.js.map