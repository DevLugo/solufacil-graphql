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
exports.Loantype = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const graphql_5 = require("@nestjs/graphql");
const loan_model_1 = require("../loan/loan.model");
const comission_payment_configuration_model_1 = require("../comission-payment-configuration/comission-payment-configuration.model");
const loantype_count_output_1 = require("./loantype-count.output");
let Loantype = class Loantype {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", String)
], Loantype.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Loantype.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], Loantype.prototype, "weekDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: false }),
    __metadata("design:type", Number)
], Loantype.prototype, "rate", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: false }),
    __metadata("design:type", Number)
], Loantype.prototype, "overdueRate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Loantype.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Loantype.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_model_1.Loan], { nullable: true }),
    __metadata("design:type", Array)
], Loantype.prototype, "Loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comission_payment_configuration_model_1.ComissionPaymentConfiguration], { nullable: true }),
    __metadata("design:type", Array)
], Loantype.prototype, "ComissionPaymentConfiguration", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_count_output_1.LoantypeCount, { nullable: false }),
    __metadata("design:type", loantype_count_output_1.LoantypeCount)
], Loantype.prototype, "_count", void 0);
Loantype = __decorate([
    (0, graphql_2.ObjectType)()
], Loantype);
exports.Loantype = Loantype;
//# sourceMappingURL=loantype.model.js.map