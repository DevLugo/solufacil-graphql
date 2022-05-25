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
exports.AggregateBorrower = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const borrower_count_aggregate_output_1 = require("./borrower-count-aggregate.output");
const borrower_min_aggregate_output_1 = require("./borrower-min-aggregate.output");
const borrower_max_aggregate_output_1 = require("./borrower-max-aggregate.output");
let AggregateBorrower = class AggregateBorrower {
};
__decorate([
    (0, graphql_1.Field)(() => borrower_count_aggregate_output_1.BorrowerCountAggregate, { nullable: true }),
    __metadata("design:type", borrower_count_aggregate_output_1.BorrowerCountAggregate)
], AggregateBorrower.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_min_aggregate_output_1.BorrowerMinAggregate, { nullable: true }),
    __metadata("design:type", borrower_min_aggregate_output_1.BorrowerMinAggregate)
], AggregateBorrower.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_max_aggregate_output_1.BorrowerMaxAggregate, { nullable: true }),
    __metadata("design:type", borrower_max_aggregate_output_1.BorrowerMaxAggregate)
], AggregateBorrower.prototype, "_max", void 0);
AggregateBorrower = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateBorrower);
exports.AggregateBorrower = AggregateBorrower;
//# sourceMappingURL=aggregate-borrower.output.js.map