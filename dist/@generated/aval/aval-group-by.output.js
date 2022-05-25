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
exports.AvalGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const aval_count_aggregate_output_1 = require("./aval-count-aggregate.output");
const aval_min_aggregate_output_1 = require("./aval-min-aggregate.output");
const aval_max_aggregate_output_1 = require("./aval-max-aggregate.output");
let AvalGroupBy = class AvalGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], AvalGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], AvalGroupBy.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], AvalGroupBy.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], AvalGroupBy.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], AvalGroupBy.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], AvalGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], AvalGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_count_aggregate_output_1.AvalCountAggregate, { nullable: true }),
    __metadata("design:type", aval_count_aggregate_output_1.AvalCountAggregate)
], AvalGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_min_aggregate_output_1.AvalMinAggregate, { nullable: true }),
    __metadata("design:type", aval_min_aggregate_output_1.AvalMinAggregate)
], AvalGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_max_aggregate_output_1.AvalMaxAggregate, { nullable: true }),
    __metadata("design:type", aval_max_aggregate_output_1.AvalMaxAggregate)
], AvalGroupBy.prototype, "_max", void 0);
AvalGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], AvalGroupBy);
exports.AvalGroupBy = AvalGroupBy;
//# sourceMappingURL=aval-group-by.output.js.map