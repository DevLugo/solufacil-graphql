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
exports.CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const commission_payment_create_without_payment_schedule_input_1 = require("./commission-payment-create-without-payment-schedule.input");
const commission_payment_create_or_connect_without_payment_schedule_input_1 = require("./commission-payment-create-or-connect-without-payment-schedule.input");
const commission_payment_create_many_payment_schedule_input_envelope_input_1 = require("./commission-payment-create-many-payment-schedule-input-envelope.input");
const commission_payment_where_unique_input_1 = require("./commission-payment-where-unique.input");
let CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput = class CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput {
};
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_create_without_payment_schedule_input_1.CommissionPaymentCreateWithoutPaymentScheduleInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_create_or_connect_without_payment_schedule_input_1.CommissionPaymentCreateOrConnectWithoutPaymentScheduleInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_create_many_payment_schedule_input_envelope_input_1.CommissionPaymentCreateManyPaymentScheduleInputEnvelope, { nullable: true }),
    __metadata("design:type", commission_payment_create_many_payment_schedule_input_envelope_input_1.CommissionPaymentCreateManyPaymentScheduleInputEnvelope)
], CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_where_unique_input_1.CommissionPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput.prototype, "connect", void 0);
CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput = __decorate([
    (0, graphql_2.InputType)()
], CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput);
exports.CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput = CommissionPaymentUncheckedCreateNestedManyWithoutPaymentScheduleInput;
//# sourceMappingURL=commission-payment-unchecked-create-nested-many-without-payment-schedule.input.js.map