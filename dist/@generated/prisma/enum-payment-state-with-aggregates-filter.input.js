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
exports.EnumPaymentStateWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const payment_state_enum_1 = require("./payment-state.enum");
const nested_enum_payment_state_with_aggregates_filter_input_1 = require("./nested-enum-payment-state-with-aggregates-filter.input");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_payment_state_filter_input_1 = require("./nested-enum-payment-state-filter.input");
let EnumPaymentStateWithAggregatesFilter = class EnumPaymentStateWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => payment_state_enum_1.PaymentState, { nullable: true }),
    __metadata("design:type", Object)
], EnumPaymentStateWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_state_enum_1.PaymentState], { nullable: true }),
    __metadata("design:type", Array)
], EnumPaymentStateWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_state_enum_1.PaymentState], { nullable: true }),
    __metadata("design:type", Array)
], EnumPaymentStateWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_payment_state_with_aggregates_filter_input_1.NestedEnumPaymentStateWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", nested_enum_payment_state_with_aggregates_filter_input_1.NestedEnumPaymentStateWithAggregatesFilter)
], EnumPaymentStateWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    __metadata("design:type", nested_int_filter_input_1.NestedIntFilter)
], EnumPaymentStateWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_payment_state_filter_input_1.NestedEnumPaymentStateFilter, { nullable: true }),
    __metadata("design:type", nested_enum_payment_state_filter_input_1.NestedEnumPaymentStateFilter)
], EnumPaymentStateWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_payment_state_filter_input_1.NestedEnumPaymentStateFilter, { nullable: true }),
    __metadata("design:type", nested_enum_payment_state_filter_input_1.NestedEnumPaymentStateFilter)
], EnumPaymentStateWithAggregatesFilter.prototype, "_max", void 0);
EnumPaymentStateWithAggregatesFilter = __decorate([
    (0, graphql_2.InputType)()
], EnumPaymentStateWithAggregatesFilter);
exports.EnumPaymentStateWithAggregatesFilter = EnumPaymentStateWithAggregatesFilter;
//# sourceMappingURL=enum-payment-state-with-aggregates-filter.input.js.map