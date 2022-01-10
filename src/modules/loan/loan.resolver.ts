import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoantypeCreateInput } from '../../@generated/prisma-nestjs-graphql/loantype/loantype-create.input';
import { Loantype } from '../../@generated/prisma-nestjs-graphql/loantype/loantype.model';
import { LoanPaymentCreateInput } from '../../@generated/prisma-nestjs-graphql/loan-payment/loan-payment-create.input';
import { LoanPayment } from '../../@generated/prisma-nestjs-graphql/loan-payment/loan-payment.model';
import { LoanCreateInput } from '../../@generated/prisma-nestjs-graphql/loan/loan-create.input';
import { Loan } from '../../@generated/prisma-nestjs-graphql/loan/loan.model';
import { LoanPaymentService } from './loan-payment/loan-payment.service';
import { LoanTypeService } from './loan-type/loan-type.service';
import { LoanService } from './loan.service';
import { LoanPaymentWhereInput } from '../../@generated/prisma-nestjs-graphql/loan-payment/loan-payment-where.input';
import { LoantypeWhereInput } from '../../@generated/prisma-nestjs-graphql/loantype/loantype-where.input';
import { LoanWhereInput } from '../../@generated/prisma-nestjs-graphql/loan/loan-where.input';

@Resolver(() => Loan)
export class LoanResolver {
    constructor(
        private readonly LoanService: LoanService,
        private readonly LoanTypeService: LoanTypeService,
        private readonly LoanPaymentService: LoanPaymentService
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
        @Args({ name: 'input', type: () => LoanCreateInput})
        data: LoanCreateInput
    ){
        return await this.LoanService.create(data);
    }

    @Mutation(() => LoanPayment)
    async createLoanPayment(
        @Args({ name: 'input', type: () => LoanPaymentCreateInput})
        data: LoanPaymentCreateInput
    ){
        return await this.LoanPaymentService.create(data);
    }

    @Mutation(() => Loantype)
    async createLoanType(
        @Args({ name: 'input', type: () => LoantypeCreateInput})
        data: LoantypeCreateInput
    ){
        return await this.LoanTypeService.create(data);
    }
}
