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
exports.UserUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const Scalars = require("graphql-scalars");
const graphql_3 = require("@nestjs/graphql");
const employee_unchecked_create_nested_many_without_user_input_1 = require("../employee/employee-unchecked-create-nested-many-without-user.input");
let UserUncheckedCreateInput = class UserUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Scalars.GraphQLEmailAddress, { nullable: false }),
    __metadata("design:type", String)
], UserUncheckedCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", String)
], UserUncheckedCreateInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserUncheckedCreateInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserUncheckedCreateInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserUncheckedCreateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], UserUncheckedCreateInput.prototype, "lastLogin", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", String)
], UserUncheckedCreateInput.prototype, "profilePicture", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], UserUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], UserUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_unchecked_create_nested_many_without_user_input_1.EmployeeUncheckedCreateNestedManyWithoutUserInput, { nullable: true }),
    __metadata("design:type", employee_unchecked_create_nested_many_without_user_input_1.EmployeeUncheckedCreateNestedManyWithoutUserInput)
], UserUncheckedCreateInput.prototype, "Employee", void 0);
UserUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], UserUncheckedCreateInput);
exports.UserUncheckedCreateInput = UserUncheckedCreateInput;
//# sourceMappingURL=user-unchecked-create.input.js.map