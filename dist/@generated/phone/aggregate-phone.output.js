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
exports.AggregatePhone = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const phone_count_aggregate_output_1 = require("./phone-count-aggregate.output");
const phone_min_aggregate_output_1 = require("./phone-min-aggregate.output");
const phone_max_aggregate_output_1 = require("./phone-max-aggregate.output");
let AggregatePhone = class AggregatePhone {
};
__decorate([
    (0, graphql_1.Field)(() => phone_count_aggregate_output_1.PhoneCountAggregate, { nullable: true }),
    __metadata("design:type", phone_count_aggregate_output_1.PhoneCountAggregate)
], AggregatePhone.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_min_aggregate_output_1.PhoneMinAggregate, { nullable: true }),
    __metadata("design:type", phone_min_aggregate_output_1.PhoneMinAggregate)
], AggregatePhone.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_max_aggregate_output_1.PhoneMaxAggregate, { nullable: true }),
    __metadata("design:type", phone_max_aggregate_output_1.PhoneMaxAggregate)
], AggregatePhone.prototype, "_max", void 0);
AggregatePhone = __decorate([
    (0, graphql_2.ObjectType)()
], AggregatePhone);
exports.AggregatePhone = AggregatePhone;
//# sourceMappingURL=aggregate-phone.output.js.map