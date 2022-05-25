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
exports.CustomerGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const customer_count_aggregate_output_1 = require("./customer-count-aggregate.output");
const customer_min_aggregate_output_1 = require("./customer-min-aggregate.output");
const customer_max_aggregate_output_1 = require("./customer-max-aggregate.output");
let CustomerGroupBy = class CustomerGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CustomerGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CustomerGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CustomerGroupBy.prototype, "logo", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CustomerGroupBy.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], CustomerGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], CustomerGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_count_aggregate_output_1.CustomerCountAggregate, { nullable: true }),
    __metadata("design:type", customer_count_aggregate_output_1.CustomerCountAggregate)
], CustomerGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_min_aggregate_output_1.CustomerMinAggregate, { nullable: true }),
    __metadata("design:type", customer_min_aggregate_output_1.CustomerMinAggregate)
], CustomerGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_max_aggregate_output_1.CustomerMaxAggregate, { nullable: true }),
    __metadata("design:type", customer_max_aggregate_output_1.CustomerMaxAggregate)
], CustomerGroupBy.prototype, "_max", void 0);
CustomerGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], CustomerGroupBy);
exports.CustomerGroupBy = CustomerGroupBy;
//# sourceMappingURL=customer-group-by.output.js.map