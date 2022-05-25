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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const GqlAuthGuard_1 = require("../auth/GqlAuthGuard");
const employee_create_input_1 = require("../../@generated/employee/employee-create.input");
const employee_model_1 = require("../../@generated/employee/employee.model");
const employee_service_1 = require("./employee.service");
let EmployeeResolver = class EmployeeResolver {
    constructor(EmployeeService) {
        this.EmployeeService = EmployeeService;
    }
    async employees(name) {
        return await this.EmployeeService.getManyByName(name);
    }
    async createEmployee(data) {
        return await this.EmployeeService.create(data);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [employee_model_1.Employee]),
    __param(0, (0, graphql_1.Args)({ name: 'name', type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeeResolver.prototype, "employees", null);
__decorate([
    (0, graphql_1.Mutation)(() => employee_model_1.Employee),
    __param(0, (0, graphql_1.Args)({ name: 'input', type: () => employee_create_input_1.EmployeeCreateInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employee_create_input_1.EmployeeCreateInput]),
    __metadata("design:returntype", Promise)
], EmployeeResolver.prototype, "createEmployee", null);
EmployeeResolver = __decorate([
    (0, common_1.UseGuards)(GqlAuthGuard_1.GqlAuthGuard),
    (0, graphql_1.Resolver)(() => employee_model_1.Employee),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeResolver);
exports.EmployeeResolver = EmployeeResolver;
//# sourceMappingURL=employee.resolver.js.map