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
exports.LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_payment_create_without_payment_schedules_input_1 = require("./loan-payment-create-without-payment-schedules.input");
const loan_payment_create_or_connect_without_payment_schedules_input_1 = require("./loan-payment-create-or-connect-without-payment-schedules.input");
const loan_payment_upsert_with_where_unique_without_payment_schedules_input_1 = require("./loan-payment-upsert-with-where-unique-without-payment-schedules.input");
const loan_payment_where_unique_input_1 = require("./loan-payment-where-unique.input");
const loan_payment_update_with_where_unique_without_payment_schedules_input_1 = require("./loan-payment-update-with-where-unique-without-payment-schedules.input");
const loan_payment_update_many_with_where_without_payment_schedules_input_1 = require("./loan-payment-update-many-with-where-without-payment-schedules.input");
const loan_payment_scalar_where_input_1 = require("./loan-payment-scalar-where.input");
let LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput = class LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_create_without_payment_schedules_input_1.LoanPaymentCreateWithoutPaymentSchedulesInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_create_or_connect_without_payment_schedules_input_1.LoanPaymentCreateOrConnectWithoutPaymentSchedulesInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_upsert_with_where_unique_without_payment_schedules_input_1.LoanPaymentUpsertWithWhereUniqueWithoutPaymentSchedulesInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_update_with_where_unique_without_payment_schedules_input_1.LoanPaymentUpdateWithWhereUniqueWithoutPaymentSchedulesInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_update_many_with_where_without_payment_schedules_input_1.LoanPaymentUpdateManyWithWhereWithoutPaymentSchedulesInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_scalar_where_input_1.LoanPaymentScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput.prototype, "deleteMany", void 0);
LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput = __decorate([
    (0, graphql_2.InputType)()
], LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput);
exports.LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput = LoanPaymentUncheckedUpdateManyWithoutPaymentSchedulesInput;
//# sourceMappingURL=loan-payment-unchecked-update-many-without-payment-schedules.input.js.map