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
exports.PhoneGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const phone_count_aggregate_output_1 = require("./phone-count-aggregate.output");
const phone_min_aggregate_output_1 = require("./phone-min-aggregate.output");
const phone_max_aggregate_output_1 = require("./phone-max-aggregate.output");
let PhoneGroupBy = class PhoneGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], PhoneGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], PhoneGroupBy.prototype, "number", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PhoneGroupBy.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], PhoneGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], PhoneGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PhoneGroupBy.prototype, "avalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PhoneGroupBy.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_count_aggregate_output_1.PhoneCountAggregate, { nullable: true }),
    __metadata("design:type", phone_count_aggregate_output_1.PhoneCountAggregate)
], PhoneGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_min_aggregate_output_1.PhoneMinAggregate, { nullable: true }),
    __metadata("design:type", phone_min_aggregate_output_1.PhoneMinAggregate)
], PhoneGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_max_aggregate_output_1.PhoneMaxAggregate, { nullable: true }),
    __metadata("design:type", phone_max_aggregate_output_1.PhoneMaxAggregate)
], PhoneGroupBy.prototype, "_max", void 0);
PhoneGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], PhoneGroupBy);
exports.PhoneGroupBy = PhoneGroupBy;
//# sourceMappingURL=phone-group-by.output.js.map