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
exports.CommissionPaymentCreateNestedManyWithoutEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const commission_payment_create_without_employee_input_1 = require("./commission-payment-create-without-employee.input");
const commission_payment_create_or_connect_without_employee_input_1 = require("./commission-payment-create-or-connect-without-employee.input");
const commission_payment_create_many_employee_input_envelope_input_1 = require("./commission-payment-create-many-employee-input-envelope.input");
const commission_payment_where_unique_input_1 = require("./commission-payment-where-unique.input");
let CommissionPaymentCreateNestedManyWithoutEmployeeInput = class CommissionPaymentCreateNestedManyWithoutEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_create_without_employee_input_1.CommissionPaymentCreateWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentCreateNestedManyWithoutEmployeeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_create_or_connect_without_employee_input_1.CommissionPaymentCreateOrConnectWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentCreateNestedManyWithoutEmployeeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_create_many_employee_input_envelope_input_1.CommissionPaymentCreateManyEmployeeInputEnvelope, { nullable: true }),
    __metadata("design:type", commission_payment_create_many_employee_input_envelope_input_1.CommissionPaymentCreateManyEmployeeInputEnvelope)
], CommissionPaymentCreateNestedManyWithoutEmployeeInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_where_unique_input_1.CommissionPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentCreateNestedManyWithoutEmployeeInput.prototype, "connect", void 0);
CommissionPaymentCreateNestedManyWithoutEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], CommissionPaymentCreateNestedManyWithoutEmployeeInput);
exports.CommissionPaymentCreateNestedManyWithoutEmployeeInput = CommissionPaymentCreateNestedManyWithoutEmployeeInput;
//# sourceMappingURL=commission-payment-create-nested-many-without-employee.input.js.map