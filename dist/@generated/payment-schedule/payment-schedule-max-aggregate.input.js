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
exports.PaymentScheduleMaxAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let PaymentScheduleMaxAggregateInput = class PaymentScheduleMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PaymentScheduleMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PaymentScheduleMaxAggregateInput.prototype, "numeration", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PaymentScheduleMaxAggregateInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PaymentScheduleMaxAggregateInput.prototype, "paidAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PaymentScheduleMaxAggregateInput.prototype, "returnToCapital", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PaymentScheduleMaxAggregateInput.prototype, "profit", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Boolean)
], PaymentScheduleMaxAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PaymentScheduleMaxAggregateInput.prototype, "delayed", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PaymentScheduleMaxAggregateInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PaymentScheduleMaxAggregateInput.prototype, "details", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Boolean)
], PaymentScheduleMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Boolean)
], PaymentScheduleMaxAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PaymentScheduleMaxAggregateInput.prototype, "loanId", void 0);
PaymentScheduleMaxAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleMaxAggregateInput);
exports.PaymentScheduleMaxAggregateInput = PaymentScheduleMaxAggregateInput;
//# sourceMappingURL=payment-schedule-max-aggregate.input.js.map