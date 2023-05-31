import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { BorrowerWhereUniqueInput } from 'src/@generated/borrower/borrower-where-unique.input';
import { BorrowerWhereInput } from 'src/@generated/borrower/borrower-where.input';
import { Loan } from 'src/@generated/loan/loan.model';
import { BorrowerCreateInput } from '../../@generated/borrower/borrower-create.input';
import { Borrower } from '../../@generated/borrower/borrower.model';
import { GqlAuthGuard } from '../auth/GqlAuthGuard';
import { LoanService } from '../loan/loan.service';
import { BorrowerService } from './borrower.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => Borrower)
export class BorrowerResolver {
    constructor(
        private readonly borrowerService: BorrowerService,
/*         private readonly loanService: LoanService
 */        ){}

    

    @Query(() => [Borrower])
    async borrowers(
        @Args({ name: 'where', type: () =>BorrowerWhereInput})
        where:BorrowerWhereInput
    ) {
        return await this.borrowerService.getMany(where);
    }

    @ResolveField(_ => Loan, {nullable:true})
    async activeLoan(@Parent() root: Borrower) {
        const { id } = root;
        console.log(await this.borrowerService.activeLoan(id))
        console.log("jorojoro")
        return await this.borrowerService.activeLoan(id);
    }

    /* @ResolveField('loanMaximumAmount')
    async loanMaximumAmount(@Parent() root: Borrower) {
        const { id } = root;
        // Get current loan
        const activeLoan = await this.loanService.latestLoanByBorrowerId(id);

        // Obtain the loanType
        
        // Calculate the max amount using as base the number of loans finished 
        // and IncreaseEveryNloans and the amountToIncrease fields
    } */

    @Query(() => Borrower)
    async getBorrower(
        @Args({ name: 'where', type: () =>BorrowerWhereUniqueInput})
        where:BorrowerWhereUniqueInput
    ) {
        return await this.borrowerService.findOne(where);
    }

    @Mutation(() => Borrower)
    async createBorrower(
        @Args({ name: 'input', type: () => BorrowerCreateInput})
        data: BorrowerCreateInput
    ){
        return await this.borrowerService.create(data);
    }



}
