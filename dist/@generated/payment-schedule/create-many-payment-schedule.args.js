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
exports.CreateManyPaymentScheduleArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const payment_schedule_create_many_input_1 = require("./payment-schedule-create-many.input");
let CreateManyPaymentScheduleArgs = class CreateManyPaymentScheduleArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_create_many_input_1.PaymentScheduleCreateManyInput], { nullable: false }),
    __metadata("design:type", Array)
], CreateManyPaymentScheduleArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CreateManyPaymentScheduleArgs.prototype, "skipDuplicates", void 0);
CreateManyPaymentScheduleArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateManyPaymentScheduleArgs);
exports.CreateManyPaymentScheduleArgs = CreateManyPaymentScheduleArgs;
//# sourceMappingURL=create-many-payment-schedule.args.js.map