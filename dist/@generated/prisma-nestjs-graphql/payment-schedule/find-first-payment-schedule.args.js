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
exports.FindFirstPaymentScheduleArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const payment_schedule_where_input_1 = require("./payment-schedule-where.input");
const payment_schedule_order_by_with_relation_input_1 = require("./payment-schedule-order-by-with-relation.input");
const payment_schedule_where_unique_input_1 = require("./payment-schedule-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const payment_schedule_scalar_field_enum_1 = require("./payment-schedule-scalar-field.enum");
let FindFirstPaymentScheduleArgs = class FindFirstPaymentScheduleArgs {
};
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_where_input_1.PaymentScheduleWhereInput, { nullable: true }),
    __metadata("design:type", payment_schedule_where_input_1.PaymentScheduleWhereInput)
], FindFirstPaymentScheduleArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_order_by_with_relation_input_1.PaymentScheduleOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstPaymentScheduleArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_where_unique_input_1.PaymentScheduleWhereUniqueInput, { nullable: true }),
    __metadata("design:type", payment_schedule_where_unique_input_1.PaymentScheduleWhereUniqueInput)
], FindFirstPaymentScheduleArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstPaymentScheduleArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstPaymentScheduleArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_scalar_field_enum_1.PaymentScheduleScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstPaymentScheduleArgs.prototype, "distinct", void 0);
FindFirstPaymentScheduleArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstPaymentScheduleArgs);
exports.FindFirstPaymentScheduleArgs = FindFirstPaymentScheduleArgs;
//# sourceMappingURL=find-first-payment-schedule.args.js.map