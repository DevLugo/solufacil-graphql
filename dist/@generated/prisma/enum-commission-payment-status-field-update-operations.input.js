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
exports.EnumCommissionPaymentStatusFieldUpdateOperationsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const commission_payment_status_enum_1 = require("./commission-payment-status.enum");
let EnumCommissionPaymentStatusFieldUpdateOperationsInput = class EnumCommissionPaymentStatusFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => commission_payment_status_enum_1.CommissionPaymentStatus, { nullable: true }),
    __metadata("design:type", Object)
], EnumCommissionPaymentStatusFieldUpdateOperationsInput.prototype, "set", void 0);
EnumCommissionPaymentStatusFieldUpdateOperationsInput = __decorate([
    (0, graphql_2.InputType)()
], EnumCommissionPaymentStatusFieldUpdateOperationsInput);
exports.EnumCommissionPaymentStatusFieldUpdateOperationsInput = EnumCommissionPaymentStatusFieldUpdateOperationsInput;
//# sourceMappingURL=enum-commission-payment-status-field-update-operations.input.js.map