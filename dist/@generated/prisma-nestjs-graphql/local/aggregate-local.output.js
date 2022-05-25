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
exports.AggregateLocal = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const local_count_aggregate_output_1 = require("./local-count-aggregate.output");
const local_min_aggregate_output_1 = require("./local-min-aggregate.output");
const local_max_aggregate_output_1 = require("./local-max-aggregate.output");
let AggregateLocal = class AggregateLocal {
};
__decorate([
    (0, graphql_1.Field)(() => local_count_aggregate_output_1.LocalCountAggregate, { nullable: true }),
    __metadata("design:type", local_count_aggregate_output_1.LocalCountAggregate)
], AggregateLocal.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_min_aggregate_output_1.LocalMinAggregate, { nullable: true }),
    __metadata("design:type", local_min_aggregate_output_1.LocalMinAggregate)
], AggregateLocal.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_max_aggregate_output_1.LocalMaxAggregate, { nullable: true }),
    __metadata("design:type", local_max_aggregate_output_1.LocalMaxAggregate)
], AggregateLocal.prototype, "_max", void 0);
AggregateLocal = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateLocal);
exports.AggregateLocal = AggregateLocal;
//# sourceMappingURL=aggregate-local.output.js.map