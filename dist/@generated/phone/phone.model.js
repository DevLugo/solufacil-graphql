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
exports.Phone = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const borrower_model_1 = require("../borrower/borrower.model");
const employee_model_1 = require("../employee/employee.model");
const aval_model_1 = require("../aval/aval.model");
let Phone = class Phone {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", String)
], Phone.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Phone.prototype, "number", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_model_1.Borrower, { nullable: true }),
    __metadata("design:type", borrower_model_1.Borrower)
], Phone.prototype, "Borrower", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Phone.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_model_1.Employee, { nullable: true }),
    __metadata("design:type", employee_model_1.Employee)
], Phone.prototype, "Employee", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Phone.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Phone.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_model_1.Aval, { nullable: true }),
    __metadata("design:type", aval_model_1.Aval)
], Phone.prototype, "aval", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Phone.prototype, "avalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Phone.prototype, "employeeId", void 0);
Phone = __decorate([
    (0, graphql_2.ObjectType)()
], Phone);
exports.Phone = Phone;
//# sourceMappingURL=phone.model.js.map