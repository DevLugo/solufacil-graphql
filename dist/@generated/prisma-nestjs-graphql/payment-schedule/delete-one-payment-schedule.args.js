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
exports.DeleteOnePaymentScheduleArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const payment_schedule_where_unique_input_1 = require("./payment-schedule-where-unique.input");
let DeleteOnePaymentScheduleArgs = class DeleteOnePaymentScheduleArgs {
};
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_where_unique_input_1.PaymentScheduleWhereUniqueInput, { nullable: false }),
    __metadata("design:type", payment_schedule_where_unique_input_1.PaymentScheduleWhereUniqueInput)
], DeleteOnePaymentScheduleArgs.prototype, "where", void 0);
DeleteOnePaymentScheduleArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DeleteOnePaymentScheduleArgs);
exports.DeleteOnePaymentScheduleArgs = DeleteOnePaymentScheduleArgs;
//# sourceMappingURL=delete-one-payment-schedule.args.js.map