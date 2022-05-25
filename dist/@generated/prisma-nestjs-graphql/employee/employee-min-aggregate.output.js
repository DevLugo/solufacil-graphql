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
exports.EmployeeMinAggregate = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employees_types_enum_1 = require("../prisma/employees-types.enum");
let EmployeeMinAggregate = class EmployeeMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], EmployeeMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => employees_types_enum_1.EmployeesTypes, { nullable: true }),
    __metadata("design:type", Object)
], EmployeeMinAggregate.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], EmployeeMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], EmployeeMinAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], EmployeeMinAggregate.prototype, "userId", void 0);
EmployeeMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], EmployeeMinAggregate);
exports.EmployeeMinAggregate = EmployeeMinAggregate;
//# sourceMappingURL=employee-min-aggregate.output.js.map