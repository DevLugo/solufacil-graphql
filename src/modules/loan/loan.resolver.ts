import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoanPaymentCreateInput } from '../../@generated/prisma-nestjs-graphql/loan-payment/loan-payment-create.input';
import { LoanPayment } from '../../@generated/prisma-nestjs-graphql/loan-payment/loan-payment.model';
import { LoanCreateInput } from '../../@generated/prisma-nestjs-graphql/loan/loan-create.input';
import { Loan } from '../../@generated/prisma-nestjs-graphql/loan/loan.model';
import { LoanService } from './loan.service';

@Resolver(() => Loan)
export class LoanResolver {
    constructor(private readonly LoanService: LoanService){}
    async loans() {
        return await this.LoanService.getMany();
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
        return await this.LoanService.createPayment(data);
    }
}
