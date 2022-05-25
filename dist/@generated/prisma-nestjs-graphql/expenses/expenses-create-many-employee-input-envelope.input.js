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
exports.ExpensesCreateManyEmployeeInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const expenses_create_many_employee_input_1 = require("./expenses-create-many-employee.input");
let ExpensesCreateManyEmployeeInputEnvelope = class ExpensesCreateManyEmployeeInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [expenses_create_many_employee_input_1.ExpensesCreateManyEmployeeInput], { nullable: false }),
    __metadata("design:type", Array)
], ExpensesCreateManyEmployeeInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ExpensesCreateManyEmployeeInputEnvelope.prototype, "skipDuplicates", void 0);
ExpensesCreateManyEmployeeInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], ExpensesCreateManyEmployeeInputEnvelope);
exports.ExpensesCreateManyEmployeeInputEnvelope = ExpensesCreateManyEmployeeInputEnvelope;
//# sourceMappingURL=expenses-create-many-employee-input-envelope.input.js.map