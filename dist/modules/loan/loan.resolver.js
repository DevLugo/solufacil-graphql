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
exports.LoanResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const loantype_create_input_1 = require("../../@generated/loantype/loantype-create.input");
const loantype_model_1 = require("../../@generated/loantype/loantype.model");
const loan_payment_create_input_1 = require("../../@generated/loan-payment/loan-payment-create.input");
const loan_payment_model_1 = require("../../@generated/loan-payment/loan-payment.model");
const loan_model_1 = require("../../@generated/loan/loan.model");
const loan_payment_service_1 = require("./loan-payment/loan-payment.service");
const loan_type_service_1 = require("./loan-type/loan-type.service");
const loan_service_1 = require("./loan.service");
const loan_payment_where_input_1 = require("../../@generated/loan-payment/loan-payment-where.input");
const loantype_where_input_1 = require("../../@generated/loantype/loantype-where.input");
const loan_where_input_1 = require("../../@generated/loan/loan-where.input");
const CustomCreateLoanInput_1 = require("./CustomCreateLoanInput");
const UpdatePaymentInput_1 = require("../loan/loan-payment/inputs/UpdatePaymentInput");
const payment_schedule_service_1 = require("./payment-schedule/payment-schedule.service");
let LoanResolver = class LoanResolver {
    constructor(LoanService, LoanTypeService, LoanPaymentService, LoanPaymentScheduleService) {
        this.LoanService = LoanService;
        this.LoanTypeService = LoanTypeService;
        this.LoanPaymentService = LoanPaymentService;
        this.LoanPaymentScheduleService = LoanPaymentScheduleService;
    }
    async loans(where) {
        return await this.LoanService.getMany(where);
    }
    async loanTypes(where) {
        return await this.LoanTypeService.getMany(where);
    }
    async loanPayments(where) {
        return await this.LoanPaymentService.getMany(where);
    }
    async createLoan(data) {
        const newLoan = await this.LoanService.createLoanProccess(data);
        return newLoan;
    }
    async createLoanPayment(data) {
        return await this.LoanPaymentService.create(data);
    }
    async payPayment(data) {
        await this.LoanPaymentService.addPaymentToLoan(data);
        return await this.LoanService.get(data.loanId);
    }
    async createLoanType(data) {
        return await this.LoanTypeService.create(data);
    }
    async totalPaidAmount(root) {
        const { id } = root;
        return await this.LoanPaymentService.getTotalPaidAmount(id);
    }
    async paymentSchedule(root) {
        const { id } = root;
        return await this.LoanPaymentScheduleService.getPaymentSchedules(id);
    }
    async payments(root) {
        const { id } = root;
        return await this.LoanPaymentService.gePayments(id);
    }
    async loanType(root) {
        return await this.LoanTypeService.get(root.loantypeId);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [loan_model_1.Loan]),
    __param(0, (0, graphql_1.Args)({ name: 'where', type: () => loan_where_input_1.LoanWhereInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loan_where_input_1.LoanWhereInput]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "loans", null);
__decorate([
    (0, graphql_1.Query)(() => [loantype_model_1.Loantype]),
    __param(0, (0, graphql_1.Args)({ name: 'where', type: () => loantype_where_input_1.LoantypeWhereInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loantype_where_input_1.LoantypeWhereInput]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "loanTypes", null);
__decorate([
    (0, graphql_1.Query)(() => [loan_payment_model_1.LoanPayment]),
    __param(0, (0, graphql_1.Args)({ name: 'where', type: () => loan_payment_where_input_1.LoanPaymentWhereInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loan_payment_where_input_1.LoanPaymentWhereInput]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "loanPayments", null);
__decorate([
    (0, graphql_1.Mutation)(() => loan_model_1.Loan),
    __param(0, (0, graphql_1.Args)({ name: 'input', type: () => CustomCreateLoanInput_1.CustomCreateLoanInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomCreateLoanInput_1.CustomCreateLoanInput]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "createLoan", null);
__decorate([
    (0, graphql_1.Mutation)(() => loan_payment_model_1.LoanPayment),
    __param(0, (0, graphql_1.Args)({ name: 'input', type: () => loan_payment_create_input_1.LoanPaymentCreateInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loan_payment_create_input_1.LoanPaymentCreateInput]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "createLoanPayment", null);
__decorate([
    (0, graphql_1.Mutation)(() => loan_model_1.Loan),
    __param(0, (0, graphql_1.Args)({ name: 'input', type: () => UpdatePaymentInput_1.LoanPaymentUpdateInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdatePaymentInput_1.LoanPaymentUpdateInput]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "payPayment", null);
__decorate([
    (0, graphql_1.Mutation)(() => loantype_model_1.Loantype),
    __param(0, (0, graphql_1.Args)({ name: 'input', type: () => loantype_create_input_1.LoantypeCreateInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loantype_create_input_1.LoantypeCreateInput]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "createLoanType", null);
__decorate([
    (0, graphql_1.ResolveField)('totalPaidAmount', returns => Number),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loan_model_1.Loan]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "totalPaidAmount", null);
__decorate([
    (0, graphql_1.ResolveField)('paymentSchedule'),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loan_model_1.Loan]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "paymentSchedule", null);
__decorate([
    (0, graphql_1.ResolveField)('payments'),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loan_model_1.Loan]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "payments", null);
__decorate([
    (0, graphql_1.ResolveField)('loanType'),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loan_model_1.Loan]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "loanType", null);
LoanResolver = __decorate([
    (0, graphql_1.Resolver)(() => loan_model_1.Loan),
    __metadata("design:paramtypes", [loan_service_1.LoanService,
        loan_type_service_1.LoanTypeService,
        loan_payment_service_1.LoanPaymentService,
        payment_schedule_service_1.PaymentScheduleService])
], LoanResolver);
exports.LoanResolver = LoanResolver;
//# sourceMappingURL=loan.resolver.js.map