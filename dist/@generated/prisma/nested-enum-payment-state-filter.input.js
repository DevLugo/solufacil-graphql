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
var NestedEnumPaymentStateFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPaymentStateFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const payment_state_enum_1 = require("./payment-state.enum");
let NestedEnumPaymentStateFilter = NestedEnumPaymentStateFilter_1 = class NestedEnumPaymentStateFilter {
};
__decorate([
    (0, graphql_1.Field)(() => payment_state_enum_1.PaymentState, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumPaymentStateFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_state_enum_1.PaymentState], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumPaymentStateFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_state_enum_1.PaymentState], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumPaymentStateFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumPaymentStateFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumPaymentStateFilter)
], NestedEnumPaymentStateFilter.prototype, "not", void 0);
NestedEnumPaymentStateFilter = NestedEnumPaymentStateFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumPaymentStateFilter);
exports.NestedEnumPaymentStateFilter = NestedEnumPaymentStateFilter;
//# sourceMappingURL=nested-enum-payment-state-filter.input.js.map