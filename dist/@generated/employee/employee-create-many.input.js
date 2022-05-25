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
exports.EmployeeCreateManyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const employees_types_enum_1 = require("../prisma/employees-types.enum");
let EmployeeCreateManyInput = class EmployeeCreateManyInput {
};
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", String)
], EmployeeCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => employees_types_enum_1.EmployeesTypes, { nullable: false }),
    __metadata("design:type", Object)
], EmployeeCreateManyInput.prototype, "type", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], EmployeeCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], EmployeeCreateManyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], EmployeeCreateManyInput.prototype, "userId", void 0);
EmployeeCreateManyInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeCreateManyInput);
exports.EmployeeCreateManyInput = EmployeeCreateManyInput;
//# sourceMappingURL=employee-create-many.input.js.map