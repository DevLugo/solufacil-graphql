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
exports.EmployeeUpsertWithoutCommissionPaymentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employee_update_without_commission_payment_input_1 = require("./employee-update-without-commission-payment.input");
const employee_create_without_commission_payment_input_1 = require("./employee-create-without-commission-payment.input");
let EmployeeUpsertWithoutCommissionPaymentInput = class EmployeeUpsertWithoutCommissionPaymentInput {
};
__decorate([
    (0, graphql_1.Field)(() => employee_update_without_commission_payment_input_1.EmployeeUpdateWithoutCommissionPaymentInput, { nullable: false }),
    __metadata("design:type", employee_update_without_commission_payment_input_1.EmployeeUpdateWithoutCommissionPaymentInput)
], EmployeeUpsertWithoutCommissionPaymentInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_without_commission_payment_input_1.EmployeeCreateWithoutCommissionPaymentInput, { nullable: false }),
    __metadata("design:type", employee_create_without_commission_payment_input_1.EmployeeCreateWithoutCommissionPaymentInput)
], EmployeeUpsertWithoutCommissionPaymentInput.prototype, "create", void 0);
EmployeeUpsertWithoutCommissionPaymentInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeUpsertWithoutCommissionPaymentInput);
exports.EmployeeUpsertWithoutCommissionPaymentInput = EmployeeUpsertWithoutCommissionPaymentInput;
//# sourceMappingURL=employee-upsert-without-commission-payment.input.js.map