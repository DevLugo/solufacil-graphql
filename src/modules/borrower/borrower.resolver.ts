import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BorrowerCreateInput } from '../../@generated/prisma-nestjs-graphql/borrower/borrower-create.input';
import { Borrower } from '../../@generated/prisma-nestjs-graphql/borrower/borrower.model';
import { GqlAuthGuard } from '../auth/GqlAuthGuard';
import { BorrowerService } from './borrower.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => Borrower)
export class BorrowerResolver {
    constructor(private readonly borrowerService: BorrowerService){}

    @Query(() => [Borrower])
    async Borrowers() {
        return await this.borrowerService.getMany();
    }

    @Mutation(() => Borrower)
    async createBorrower(
        @Args({ name: 'input', type: () => BorrowerCreateInput})
        data: BorrowerCreateInput
    ){
        return await this.borrowerService.create(data);
    }

}
