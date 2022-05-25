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
exports.CommissionPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const commission_payment_where_unique_input_1 = require("./commission-payment-where-unique.input");
const commission_payment_update_without_payment_schedule_input_1 = require("./commission-payment-update-without-payment-schedule.input");
const commission_payment_create_without_payment_schedule_input_1 = require("./commission-payment-create-without-payment-schedule.input");
let CommissionPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput = class CommissionPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput {
};
__decorate([
    (0, graphql_1.Field)(() => commission_payment_where_unique_input_1.CommissionPaymentWhereUniqueInput, { nullable: false }),
    __metadata("design:type", commission_payment_where_unique_input_1.CommissionPaymentWhereUniqueInput)
], CommissionPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_update_without_payment_schedule_input_1.CommissionPaymentUpdateWithoutPaymentScheduleInput, { nullable: false }),
    __metadata("design:type", commission_payment_update_without_payment_schedule_input_1.CommissionPaymentUpdateWithoutPaymentScheduleInput)
], CommissionPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_create_without_payment_schedule_input_1.CommissionPaymentCreateWithoutPaymentScheduleInput, { nullable: false }),
    __metadata("design:type", commission_payment_create_without_payment_schedule_input_1.CommissionPaymentCreateWithoutPaymentScheduleInput)
], CommissionPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput.prototype, "create", void 0);
CommissionPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput = __decorate([
    (0, graphql_2.InputType)()
], CommissionPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput);
exports.CommissionPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput = CommissionPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput;
//# sourceMappingURL=commission-payment-upsert-with-where-unique-without-payment-schedule.input.js.map