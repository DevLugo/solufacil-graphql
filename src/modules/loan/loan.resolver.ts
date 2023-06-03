import { Args, Mutation, Parent, Query, ResolveField, ResolveProperty, Resolver, ResolveReference } from '@nestjs/graphql';
import { LoantypeCreateInput } from '../../@generated/loantype/loantype-create.input';
import { Loantype } from '../../@generated/loantype/loantype.model';
import { LoanPaymentCreateInput } from '../../@generated/loan-payment/loan-payment-create.input';
import { LoanPayment } from '../../@generated/loan-payment/loan-payment.model';
import { Loan } from '../../@generated/loan/loan.model';
import { LoanPaymentService } from './loan-payment/loan-payment.service';
import { LoanTypeService } from './loan-type/loan-type.service';
import { LoanService } from './loan.service';
import { LoanPaymentWhereInput } from '../../@generated/loan-payment/loan-payment-where.input';
import { LoantypeWhereInput } from '../../@generated/loantype/loantype-where.input';
import { LoanWhereInput } from '../../@generated/loan/loan-where.input';
import { CustomCreateManyLoanInput } from './CustomCreateLoanInput';
import { LoanPaymentBulkUpdate } from '../loan/loan-payment/inputs/UpdatePaymentInput';
import { PaymentScheduleService } from './payment-schedule/payment-schedule.service';
import { ExecutionContext } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/GqlAuthGuard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from './../auth/auth.decorator';
import { EmployeeService } from '../employee/employee.service';
import { ContractService } from '../contract/contract.service';
@Resolver(() => Loan)
@UseGuards(GqlAuthGuard)

export class LoanResolver {
    constructor(
        private readonly _loanService: LoanService,
        private readonly _loanTypeService: LoanTypeService,
        private readonly _loanPaymentService: LoanPaymentService,
        private readonly _loanPaymentScheduleService: PaymentScheduleService,
        private readonly _employeeService: EmployeeService,
        private readonly _contractService: ContractService,
    ) { }
    @Query(() => [Loan])
    async loans(
        @Args({ name: 'where', type: () => LoanWhereInput })
        where: LoanWhereInput
    ) {
        return await this._loanService.getMany(where);
    }

    @Query(() => [Loantype])
    async loanTypes(
        @Args({ name: 'where', type: () => LoantypeWhereInput })
        where: LoantypeWhereInput
    ) {
        return await this._loanTypeService.getMany(where);
    }

    @Query(() => [LoanPayment])
    async loanPayments(
        @Args({ name: 'where', type: () => LoanPaymentWhereInput })
        where: LoanPaymentWhereInput
    ) {
        return await this._loanPaymentService.getMany(where);
    }


    /**
     * Creates new loans.
     *
     * @param {CustomCreateLoanInput[]} data - An array of loan input data.
     * @returns {Promise<Loan[]>} - A promise that resolves to an array of newly created loans.
     */
    @Mutation(() => [Loan])
    async createLoanBulk(
        @Args({ name: 'input', type: () => CustomCreateManyLoanInput })
        @CurrentUser() user: any,
        data: CustomCreateManyLoanInput,
    ): Promise<Loan[]> {
        const loans = [];
        for (const loanData of data.loans) {
            //get contract type from db
            const { borrowerId, } = loanData;
            
            const loanType = await this._loanTypeService.get(loanData.contract.connect.id);
            //calculate the end date of the contract. Using as base the sign date and the weeks duration of the type contract
            const endDate = new Date(loanData.signDate);
            endDate.setDate(endDate.getDate() + (loanType.weekDuration * 7));
            
            //get the employee from the user
            let contract = await this._contractService.getActiveContract(borrowerId, endDate);
            
            if (!contract) {
                //if the employee doesn't have an active contract, create a new one
                contract = await this._contractService.create({
                    signDate: new Date(loanData.signDate),
                    contractTypeId: "14",
                    borrowerId,
                    employeeId: borrowerId || user.id,
                });
                
                const loan = {
                    ...loanData,
                    employee: {
                        connect: {
                            id: borrowerId,
                        },
                    },
                    contract: contract ? { connect: { id: contract.id } } : undefined,
                };
                loans.push(loan);
            };
        }
        return this._loanService.createLoansProcess(loans);
    }

    @Mutation(() => LoanPayment)
    async createLoanPayment(
        @Args({ name: 'input', type: () => LoanPaymentCreateInput })
        data: LoanPaymentCreateInput
    ) {
        return await this._loanPaymentService.create(data);
    }

    @Mutation(() => [Loan])
    async payLoan(
        @Args({ name: 'input', type: () => [LoanPaymentBulkUpdate] })
        data: [LoanPaymentBulkUpdate],
        @CurrentUser() user: any,
    ) {

        const employee = await this._employeeService.getUnique({ userId: user.id });
        for (const e of data) {
            await this._loanPaymentService.addPaymentToLoan({
                amount: e.amount,
                loanId: e.loanId,
                paidDate: new Date(),
                employeeId: employee.id
            });
        }
        return await this._loanService.getMany(
            {
                id: { in: data.map(e => e.loanId) }
            }
        );
    }

    @Mutation(() => Loantype)
    async createLoanType(
        @Args({ name: 'input', type: () => LoantypeCreateInput })
        data: LoantypeCreateInput
    ) {
        return await this._loanTypeService.create(data);
    }

    @ResolveField('totalPaidAmount', returns => Number)
    async totalPaidAmount(@Parent() root: Loan) {
        const { id } = root;
        return await this._loanPaymentService.getTotalPaidAmount(id);
    }

    @ResolveField('paymentSchedule')
    async paymentSchedule(@Parent() root: Loan) {
        const { id } = root;
        return await this._loanPaymentScheduleService.getPaymentSchedules(id);
    }

    @ResolveField('payments')
    async payments(@Parent() root: Loan) {
        const { id } = root;
        return await this._loanPaymentService.gePayments(id);
    }

    @ResolveField('loanType')
    async loanType(@Parent() root: Loan) {
        return await this._loanTypeService.get(root.loantypeId);
    }

}
