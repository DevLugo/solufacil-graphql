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
import { CustomCreateLoanInput } from './CustomCreateLoanInput';
import { LoanPaymentBulkUpdate, LoanPaymentUpdateInput } from '../loan/loan-payment/inputs/UpdatePaymentInput';
import { PaymentScheduleService } from './payment-schedule/payment-schedule.service';
import { ExecutionContext } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/GqlAuthGuard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from './../auth/auth.decorator';
import { EmployeeService } from '../employee/employee.service';
import { ContractService } from '../contract/contract.service';
import { BorrowerService } from '../borrower/borrower.service';

@Resolver(() => Loan)
@UseGuards(GqlAuthGuard)

export class LoanResolver {
    constructor(
        private readonly LoanService: LoanService,
        private readonly LoanTypeService: LoanTypeService,
        private readonly LoanPaymentService: LoanPaymentService,
        private readonly LoanPaymentScheduleService: PaymentScheduleService,
        private readonly EmployeeService: EmployeeService,
        private readonly ContractService: ContractService,
        private readonly BorrowerService: BorrowerService,

        ){}
    @Query(() => [Loan])
    async loans(
        @Args({ name: 'where', type: () =>LoanWhereInput})
        where:LoanWhereInput
    ) {
        return await this.LoanService.getMany(where);
    }

    @Query(() => [Loantype])
    async loanTypes(
        @Args({ name: 'where', type: () =>LoantypeWhereInput})
        where:LoantypeWhereInput
    ) {
        return await this.LoanTypeService.getMany(where);
    }

    @Query(() => [LoanPayment])
    async loanPayments(
        @Args({ name: 'where', type: () =>LoanPaymentWhereInput})
        where:LoanPaymentWhereInput
    ) {
        return await this.LoanPaymentService.getMany(where);
    }

    @Mutation(() => Loan)
    async createLoan(
        @Args({ name: 'input', type: () => CustomCreateLoanInput})
        data: CustomCreateLoanInput
    ){
        const newLoan = await this.LoanService.createLoanProccess(data);
        return newLoan;
    }

    /**
     * Creates new loans.
     *
     * @param {CustomCreateLoanInput[]} data - An array of loan input data.
     * @returns {Promise<Loan[]>} - A promise that resolves to an array of newly created loans.
     */
    @Mutation(() => [Loan])
    async createLoans(
        @Args({ name: 'input', type: () => [CustomCreateLoanInput]})
        data: [CustomCreateLoanInput]
    ): Promise<Loan[]> {
        const newLoans = await Promise.all(data.map(async (e) => await this.LoanService.createLoanProccess(e)));
        return newLoans;
    }



    @Mutation(() => Loan)
    async createContractAndLoan(
        @Args({ name: 'input', type: () => CustomCreateLoanInput})
        data: CustomCreateLoanInput
    ){
        const borrower = this.BorrowerService.create({
            personalData:{
                create:{
                    firstName:"",
                    fullName: "",
                    lastName: "",
                    addresses: {
                        create: [
                            {
                                interiorNumber: "",
                                location: {
                                    connect: {id: "1"}
                                },
                                street: "",
                                postalCode: "",
                                exteriorNumber: "",
                            }]
                    },
                    phones:{
                        create:[{
                            number:"123"
                        }]
                    } 
                }
            },
            email:"asd",
            contract:{
                create:[
                    {
                        dueDate: new Date(),
                        signDate: new Date(),
                        employee: {
                            connect:{
                                userId: "as",
                            }
                        },
                        loanLead: {
                            connect: {
                                id: "a"
                            }
                        },
                        contractType: {
                            connect: {
                                id:"2"
                            }
                        }
                    }
                ]
            }
        });
        return borrower;
    }

    @Mutation(() => LoanPayment)
    async createLoanPayment(
        @Args({ name: 'input', type: () => LoanPaymentCreateInput})
        data: LoanPaymentCreateInput
    ){
        return await this.LoanPaymentService.create(data);
    }

    @Mutation(() => [Loan])
    async payPayment(
        @Args({ name: 'input', type: () => [LoanPaymentBulkUpdate]})
        data: [LoanPaymentBulkUpdate],
        @CurrentUser() user: any,
    ){
        
        const employee = await this.EmployeeService.getUnique({userId:user.id});
        for (const e of data){
            await this.LoanPaymentService.addPaymentToLoan({
                amount: e.amount,
                loanId: e.loanId,
                paidDate: new Date(),
                employeeId: employee.id
            });
        }
        return await this.LoanService.getMany(
            {
                id:{in: data.map(e => e.loanId)}
            }
        );
    }

    @Mutation(() => Loantype)
    async createLoanType(
        @Args({ name: 'input', type: () => LoantypeCreateInput})
        data: LoantypeCreateInput
    ){
        return await this.LoanTypeService.create(data);
    }

    @ResolveField('totalPaidAmount', returns => Number)
    async totalPaidAmount(@Parent() root: Loan) {
        const { id } = root;
        return await this.LoanPaymentService.getTotalPaidAmount(id);
    }

    @ResolveField('paymentSchedule')
    async paymentSchedule(@Parent() root: Loan) {
        const { id } = root;
        return await this.LoanPaymentScheduleService.getPaymentSchedules(id);
    }

    @ResolveField('payments')
    async payments(@Parent() root: Loan) {
        const { id } = root;
        return await this.LoanPaymentService.gePayments(id);
    }

    @ResolveField('loanType')
    async loanType(@Parent() root: Loan) {
        return await this.LoanTypeService.get(root.loantypeId);
    }

}
