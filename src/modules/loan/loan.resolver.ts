import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ValidationPipe} from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { createParamDecorator, BadRequestException } from '@nestjs/common';


import { PrismaService } from '../../core/prisma/prisma.service';
import { LoanService } from './loan.service';
import { CreateLoansProcess, Loan, LoanByBorrowerWhereUniqueInput, LoanCreateInput } from './types';
import { CurrentUser } from '../auth/auth.decorator';
import { ContractService } from '../contract/contract.service';
import { PaymentSchedule } from '../payment-schedule/types';
import { PersonalData } from '../personal-data/types';
import { Employee } from '../employee/types';
import { Contract } from '../contract/types';
import { LoanPayment, PayLoanPaymentInput } from '../loan-payment/types';
import {UsePipes} from '@nestjs/common';
import { ValidateInput } from 'src/core/general/decorators';
import * as yup from 'yup';
import { YupValidationPipe } from 'src/utils/pipes/yupValidationPipe';
import { GqlAuthGuard } from '../auth/GqlAuthGuard';
import { UseGuards } from '@nestjs/common';
import { IJwtPayload } from '../auth/types';
import { borrowerValidations } from '../borrower/validations';
import {personalDataValidations} from '../personal-data/validations';
import { LoanPaymentService } from '../loan-payment/loan-payment.service';
import { Borrower } from '../borrower/types';

export const LoanCreateInputValidations = yup.array().of( 
    yup.object().shape({
        firstPaymentDate: yup.date().required(),
        loanLeadId: yup.string().required(), 
        isRenovation: yup.boolean().required(),
        amountGived: yup.number().required(),
        loanTypeId: yup.string().required(),
        granterId: yup.string(),
        signDate: yup.date().required(),
        borrowerId: yup.string().when('isRenovation', {
            is: true,
            then: (schema) => schema.required(),
        }),
        borrower:  yup.object().when('isRenovation', {
            is: false,
            then: () => borrowerValidations
        }),
        avals:  yup.array().min(1).of(
            yup.object().shape({
                //TODO: Validate that at least one of this two exists
                avalId: yup.string(),
                newAval: yup.object().shape({
                    personalDataValidations
                })
            })
        ),

}));

@UseGuards(GqlAuthGuard)
@Resolver(Loan)
export class LoanResolver {
    constructor(
        private readonly _db: PrismaService,
        private readonly _loanService: LoanService,
        private readonly _contractService: ContractService,
        private readonly _loanPaymentService: LoanPaymentService

    ) { }

    @Mutation(() => Loan)
    async payPayment(
        @CurrentUser() user: IJwtPayload,
        @Args({ name: 'input', type: () =>  PayLoanPaymentInput})
        data: PayLoanPaymentInput
    ){
        await this._loanPaymentService.addPaymentToLoan(
            {
                ...data,
                collectorId: user.employeeId
            }
        );
        return await this._db.loan.findUnique({where: {id: data.loanId}});
    }

    @Query(() => Loan)
    async getLoanByBorrower(
        @CurrentUser() user: IJwtPayload,
        @Args({ name: 'where', type: () =>  LoanByBorrowerWhereUniqueInput})
        where: LoanByBorrowerWhereUniqueInput
    ){
        return await this._db.loan.findFirst(
            {
                where:{
                    status: 'APPROVED',
                    contract:{
                        borrowerId: where.borrowerId,
                    },
                },
                orderBy: {
                    signDate: 'desc'
                }
            }
        );
    }

    @Mutation(() => Loan)
    async createLoan(
        @CurrentUser() user: IJwtPayload,
        @Args({ name: 'input', type: () => LoanCreateInput })
        input: LoanCreateInput,
    ): Promise<Loan> 
    {
        const loanData = input;
        //trhow an unauthenticated error  if user is empty
        if (!user) {
            throw new HttpException('Unauthenticated', HttpStatus.UNAUTHORIZED);
        }
        console.log("--------", user)
        // validate if the loanData has a firstPaymentDate, if not, throw an error
        if (!input.firstPaymentDate) {
            throw new BadRequestException("firstPaymentDate is required");
        }
        // if the isRenovation is true, validate if the loanData has a borrowerId, if not, throw an error. and if it has, validate if the borrower exists, if not, throw an error
        if (input.isRenovation) {
            if (!input.borrowerId) {
                throw new BadRequestException("borrowerId is required");
            }

            if (input.borrower) {
                throw new BadRequestException("borrower is not required when isRenovation is true");
            }
            const borrower = await this._db.borrower.findUnique({ where: { id: input.borrowerId } });
            if (!borrower) {
                throw new BadRequestException("borrowerId is not valid");
            }
        }
        // if the isRenovation is false, validate if the loanData has a borrower, if not, throw an error. and if it has, validate if the borrower is valid, if not, throw an error
        if (!loanData.isRenovation) {
            console.log("//////////////")
            console.log("//////////////")
            console.log("//////////////")
            console.log("//////////////")
            console.log("//////////////")
            console.log("//////////////")

            if (!loanData.borrower) {
                throw new BadRequestException("borrower is required");
            }
            if(!loanData.borrower.personalData){
                throw new BadRequestException("personalData is required");
            }
            console.log("*********************************")
            console.log("*********************************")
            console.log("*********************************")
            console.log("*********************************")
            console.log("*********************************")
            console.log("*********************************")
            console.log("*********************************")
            console.log("*********************************")


            if(!loanData.borrower.personalData.phones.length){
                throw new BadRequestException("phones is required and must have at least one phone");
            }
            if(!loanData.borrower.personalData.adresses.length){
                throw new BadRequestException("adresses is required and must have at least one adress");
            }
        }

        if(!loanData.signDate){
            throw new BadRequestException("signDate is required");
        }
        console.log("aka 1")
        //get contract type from db
        const { borrowerId, loanLeadId } = loanData;
        
        const loanType = await this._db.loantype.findFirstOrThrow({where: {id: loanData.loanTypeId}});
        console.log("aka 2")

        //calculate the end date of the contract. Using as base the sign date and the weeks duration of the type contract
        const endDate = new Date(loanData.signDate);
        endDate.setDate(endDate.getDate() + (loanType.weekDuration * 7));
        console.log("aka 3")
        
        //get the employee from the user
        let contract = await this._contractService.getActiveContract(borrowerId, loanData.signDate as Date);
        console.log("aka 4", contract.id)
        
        if (!contract) {
         console.log("aka 4.1", contract)

            //if the employee doesn't have an active contract, create a new one
            contract = await this._contractService.create({
                signDate: new Date(loanData.signDate),
                contractTypeId: "14",
                borrowerId,
                loanLeadId,
                grantorId: user.id,
            });
            
            
        };
        const loan:CreateLoansProcess = {
            ...loanData,
            contractId: contract.id,
            grantorId: user.id,
        };
        const res = await this._loanService.createLoansProcess([loan]);
        return res[0];
    }


    @Mutation(() => [Loan])
/*     @UsePipes(new YupValidationPipe(LoanCreateInputValidations))
 */    async createLoanBulk(
        @CurrentUser() user: IJwtPayload,
        @Args({ name: 'input', type: () => [LoanCreateInput] })
        input: [LoanCreateInput],
    ): Promise<Loan[]> 
    {
        //trhow an unauthenticated error  if user is empty
        if (!user) {
            throw new HttpException('Unauthenticated', HttpStatus.UNAUTHORIZED);
        }
        console.log("--------", user)
        const loans = [];
        for (const loanData of input) {
            // validate if the loanData has a firstPaymentDate, if not, throw an error
            if (!loanData.firstPaymentDate) {
                throw new BadRequestException("firstPaymentDate is required");
            }
            // if the isRenovation is true, validate if the loanData has a borrowerId, if not, throw an error. and if it has, validate if the borrower exists, if not, throw an error
            if (loanData.isRenovation) {
                if (!loanData.borrowerId) {
                    throw new BadRequestException("borrowerId is required");
                }

                if (loanData.borrower) {
                    throw new BadRequestException("borrower is not required when isRenovation is true");
                }
                const borrower = await this._db.borrower.findUnique({ where: { id: loanData.borrowerId } });
                if (!borrower) {
                    throw new BadRequestException("borrowerId is not valid");
                }
            }
            // if the isRenovation is false, validate if the loanData has a borrower, if not, throw an error. and if it has, validate if the borrower is valid, if not, throw an error
            if (!loanData.isRenovation) {
                console.log("//////////////")
                console.log("//////////////")
                console.log("//////////////")
                console.log("//////////////")
                console.log("//////////////")
                console.log("//////////////")

                if (!loanData.borrower) {
                    throw new BadRequestException("borrower is required");
                }
                if(!loanData.borrower.personalData){
                    throw new BadRequestException("personalData is required");
                }
                console.log("*********************************")
                console.log("*********************************")
                console.log("*********************************")
                console.log("*********************************")
                console.log("*********************************")
                console.log("*********************************")
                console.log("*********************************")
                console.log("*********************************")


                if(!loanData.borrower.personalData.phones.length){
                    throw new BadRequestException("phones is required and must have at least one phone");
                }
                if(!loanData.borrower.personalData.adresses.length){
                    throw new BadRequestException("adresses is required and must have at least one adress");
                }
            }

            if(!loanData.signDate){
                throw new BadRequestException("signDate is required");
            }
            console.log("aka 1")
            //get contract type from db
            const { borrowerId, loanLeadId } = loanData;
            
            const loanType = await this._db.loantype.findFirstOrThrow({where: {id: loanData.loanTypeId}});
            console.log("aka 2")

            //calculate the end date of the contract. Using as base the sign date and the weeks duration of the type contract
            const endDate = new Date(loanData.signDate);
            endDate.setDate(endDate.getDate() + (loanType.weekDuration * 7));
            console.log("aka 3")
            
            //get the employee from the user
            let contract = await this._contractService.getActiveContract(borrowerId, loanData.signDate as Date);
            console.log("aka 4", contract.id)
            
            if (!contract) {
             console.log("aka 4.1", contract)

                //if the employee doesn't have an active contract, create a new one
                contract = await this._contractService.create({
                    signDate: new Date(loanData.signDate),
                    contractTypeId: "14",
                    borrowerId,
                    loanLeadId,
                    grantorId: user.id,
                });
                
                
            };
            const loan:CreateLoansProcess = {
                ...loanData,
                contractId: contract.id,
                grantorId: user.id,
            };
            
            console.log("aka 5")
            console.log(loans, loan)
            loans.push(loan);
        }
        //console.log(this._loanService.createLoansProcess(loans))
        console.log("LOANS:----", loans)
        const res = await this._loanService.createLoansProcess(loans);
        console.log("res", res)
        return res;
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
