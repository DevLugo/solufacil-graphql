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
exports.ExpensesMaxAggregate = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const payment_state_enum_1 = require("../prisma/payment-state.enum");
let ExpensesMaxAggregate = class ExpensesMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ExpensesMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], ExpensesMaxAggregate.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_state_enum_1.PaymentState, { nullable: true }),
    __metadata("design:type", Object)
], ExpensesMaxAggregate.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ExpensesMaxAggregate.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ExpensesMaxAggregate.prototype, "payedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ExpensesMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ExpensesMaxAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ExpensesMaxAggregate.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ExpensesMaxAggregate.prototype, "employeeId", void 0);
ExpensesMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ExpensesMaxAggregate);
exports.ExpensesMaxAggregate = ExpensesMaxAggregate;
//# sourceMappingURL=expenses-max-aggregate.output.js.map