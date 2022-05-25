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
exports.EmployeeCreateNestedOneWithoutCommissionPaymentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employee_create_without_commission_payment_input_1 = require("./employee-create-without-commission-payment.input");
const employee_create_or_connect_without_commission_payment_input_1 = require("./employee-create-or-connect-without-commission-payment.input");
const employee_where_unique_input_1 = require("./employee-where-unique.input");
let EmployeeCreateNestedOneWithoutCommissionPaymentInput = class EmployeeCreateNestedOneWithoutCommissionPaymentInput {
};
__decorate([
    (0, graphql_1.Field)(() => employee_create_without_commission_payment_input_1.EmployeeCreateWithoutCommissionPaymentInput, { nullable: true }),
    __metadata("design:type", employee_create_without_commission_payment_input_1.EmployeeCreateWithoutCommissionPaymentInput)
], EmployeeCreateNestedOneWithoutCommissionPaymentInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_or_connect_without_commission_payment_input_1.EmployeeCreateOrConnectWithoutCommissionPaymentInput, { nullable: true }),
    __metadata("design:type", employee_create_or_connect_without_commission_payment_input_1.EmployeeCreateOrConnectWithoutCommissionPaymentInput)
], EmployeeCreateNestedOneWithoutCommissionPaymentInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_where_unique_input_1.EmployeeWhereUniqueInput, { nullable: true }),
    __metadata("design:type", employee_where_unique_input_1.EmployeeWhereUniqueInput)
], EmployeeCreateNestedOneWithoutCommissionPaymentInput.prototype, "connect", void 0);
EmployeeCreateNestedOneWithoutCommissionPaymentInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeCreateNestedOneWithoutCommissionPaymentInput);
exports.EmployeeCreateNestedOneWithoutCommissionPaymentInput = EmployeeCreateNestedOneWithoutCommissionPaymentInput;
//# sourceMappingURL=employee-create-nested-one-without-commission-payment.input.js.map