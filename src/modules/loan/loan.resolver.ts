import { Args, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../core/prisma/prisma.service';
import { LoanService } from './loan.service';
import { Loan, LoanCreateInput } from './types';
import { CurrentUser } from '../auth/auth.decorator';
import { ContractService } from '../contract/contract.service';
import { PaymentSchedule } from '../payment-schedule/types';
import { PersonalData } from '../personal-data/types';
import { Employee } from '../employee/types';
import { Contract } from '../contract/types';
import { LoanPayment } from '../loan-payment/types';

@Resolver(Loan)
export class LoanResolver {
    constructor(
        private readonly _db: PrismaService,
        private readonly _loanService: LoanService,
        private readonly _contractService: ContractService
    ) { }

    @Mutation(() => [Loan])
    async createLoanBulk(
        @Args({ name: 'input', type: () => [LoanCreateInput] })
        data: [LoanCreateInput],
        @CurrentUser() user: any,
    ): Promise<Loan[]> {
        const loans = [];
        for (const loanData of data) {
            //get contract type from db
            const { borrowerId, grantorId, loanLeadId } = loanData;
            
            const loanType = await this._db.loantype.findFirstOrThrow({where: {id: loanData.loanTypeId}});
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
                    loanLeadId,
                    grantorId: grantorId || user.id,
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

    @ResolveField(() => [PaymentSchedule])
    async paymentsSchedules(@Parent() loan: Loan) {
        const { id } = loan;
        return this._db.paymentSchedule.findMany({
            where: {
                loanId: id,
            },
        });
    }
    
    @ResolveField(() => [PersonalData])
    async avals(@Parent() loan: Loan) {
        const { id } = loan;
        return this._db.personalData.findMany({
            where: {
                loanId: id,
            },
        });
    }

    @ResolveField(() => Employee)
    async grantor(@Parent() loan: Loan) {
        const { grantorId } = loan;
        return this._db.employee.findUnique({
            where: {
                id: grantorId,
            },
        });
    }

    @ResolveField(() => Contract)
    async contract(@Parent() loan: Loan) {
        const { contractId } = loan;
        return this._db.contract.findUnique({
            where: {
                id: contractId,
            },
        });
    }
    
    @ResolveField(() => [LoanPayment])
    async payments(@Parent() loan: Loan) {
        const { id } = loan;
        return this._db.loanPayment.findMany({
            where: {
                loanId: id,
            },
        });
    }
}
