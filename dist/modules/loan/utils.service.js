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
exports.UtilsService = exports.PaymentBreakDown = void 0;
const graphql_1 = require("@nestjs/graphql");
let PaymentBreakDown = class PaymentBreakDown {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: false }),
    __metadata("design:type", Number)
], PaymentBreakDown.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: false }),
    __metadata("design:type", Number)
], PaymentBreakDown.prototype, "profit", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: false }),
    __metadata("design:type", Number)
], PaymentBreakDown.prototype, "returnOfCapital", void 0);
PaymentBreakDown = __decorate([
    (0, graphql_1.ObjectType)()
], PaymentBreakDown);
exports.PaymentBreakDown = PaymentBreakDown;
class UtilsService {
    constructor() { }
    paymentBreakDown(amount, rate) {
        const profit = (Number(amount) / rate) / Number((10 + (rate * 10) * 10));
        const returnOfCapital = Number(amount) - profit;
        const breakDown = {
            amount: Number(amount.toFixed(2)),
            profit: Number(profit.toFixed(2)),
            returnOfCapital: Number(returnOfCapital.toFixed(2))
        };
        return breakDown;
    }
}
exports.UtilsService = UtilsService;
//# sourceMappingURL=utils.service.js.map