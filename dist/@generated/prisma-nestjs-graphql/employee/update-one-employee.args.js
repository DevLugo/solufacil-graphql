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
exports.UpdateOneEmployeeArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employee_update_input_1 = require("./employee-update.input");
const employee_where_unique_input_1 = require("./employee-where-unique.input");
let UpdateOneEmployeeArgs = class UpdateOneEmployeeArgs {
};
__decorate([
    (0, graphql_1.Field)(() => employee_update_input_1.EmployeeUpdateInput, { nullable: false }),
    __metadata("design:type", employee_update_input_1.EmployeeUpdateInput)
], UpdateOneEmployeeArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_where_unique_input_1.EmployeeWhereUniqueInput, { nullable: false }),
    __metadata("design:type", employee_where_unique_input_1.EmployeeWhereUniqueInput)
], UpdateOneEmployeeArgs.prototype, "where", void 0);
UpdateOneEmployeeArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneEmployeeArgs);
exports.UpdateOneEmployeeArgs = UpdateOneEmployeeArgs;
//# sourceMappingURL=update-one-employee.args.js.map