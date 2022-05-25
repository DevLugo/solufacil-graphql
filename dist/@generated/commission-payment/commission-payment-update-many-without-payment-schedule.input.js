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
exports.CommissionPaymentUpdateManyWithoutPaymentScheduleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const commission_payment_create_without_payment_schedule_input_1 = require("./commission-payment-create-without-payment-schedule.input");
const commission_payment_create_or_connect_without_payment_schedule_input_1 = require("./commission-payment-create-or-connect-without-payment-schedule.input");
const commission_payment_upsert_with_where_unique_without_payment_schedule_input_1 = require("./commission-payment-upsert-with-where-unique-without-payment-schedule.input");
const commission_payment_create_many_payment_schedule_input_envelope_input_1 = require("./commission-payment-create-many-payment-schedule-input-envelope.input");
const commission_payment_where_unique_input_1 = require("./commission-payment-where-unique.input");
const commission_payment_update_with_where_unique_without_payment_schedule_input_1 = require("./commission-payment-update-with-where-unique-without-payment-schedule.input");
const commission_payment_update_many_with_where_without_payment_schedule_input_1 = require("./commission-payment-update-many-with-where-without-payment-schedule.input");
const commission_payment_scalar_where_input_1 = require("./commission-payment-scalar-where.input");
let CommissionPaymentUpdateManyWithoutPaymentScheduleInput = class CommissionPaymentUpdateManyWithoutPaymentScheduleInput {
};
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_create_without_payment_schedule_input_1.CommissionPaymentCreateWithoutPaymentScheduleInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUpdateManyWithoutPaymentScheduleInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_create_or_connect_without_payment_schedule_input_1.CommissionPaymentCreateOrConnectWithoutPaymentScheduleInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUpdateManyWithoutPaymentScheduleInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_upsert_with_where_unique_without_payment_schedule_input_1.CommissionPaymentUpsertWithWhereUniqueWithoutPaymentScheduleInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUpdateManyWithoutPaymentScheduleInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_create_many_payment_schedule_input_envelope_input_1.CommissionPaymentCreateManyPaymentScheduleInputEnvelope, { nullable: true }),
    __metadata("design:type", commission_payment_create_many_payment_schedule_input_envelope_input_1.CommissionPaymentCreateManyPaymentScheduleInputEnvelope)
], CommissionPaymentUpdateManyWithoutPaymentScheduleInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_where_unique_input_1.CommissionPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUpdateManyWithoutPaymentScheduleInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_where_unique_input_1.CommissionPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUpdateManyWithoutPaymentScheduleInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_where_unique_input_1.CommissionPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUpdateManyWithoutPaymentScheduleInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_where_unique_input_1.CommissionPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUpdateManyWithoutPaymentScheduleInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_update_with_where_unique_without_payment_schedule_input_1.CommissionPaymentUpdateWithWhereUniqueWithoutPaymentScheduleInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUpdateManyWithoutPaymentScheduleInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_update_many_with_where_without_payment_schedule_input_1.CommissionPaymentUpdateManyWithWhereWithoutPaymentScheduleInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUpdateManyWithoutPaymentScheduleInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_scalar_where_input_1.CommissionPaymentScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUpdateManyWithoutPaymentScheduleInput.prototype, "deleteMany", void 0);
CommissionPaymentUpdateManyWithoutPaymentScheduleInput = __decorate([
    (0, graphql_2.InputType)()
], CommissionPaymentUpdateManyWithoutPaymentScheduleInput);
exports.CommissionPaymentUpdateManyWithoutPaymentScheduleInput = CommissionPaymentUpdateManyWithoutPaymentScheduleInput;
//# sourceMappingURL=commission-payment-update-many-without-payment-schedule.input.js.map