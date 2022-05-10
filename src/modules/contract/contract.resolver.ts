import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ContractWhereInput } from '@generated/prisma-nestjs-graphql/contract/contract-where.input';
import { Contract } from '@generated/prisma-nestjs-graphql/contract/contract.model';
import { GqlAuthGuard } from '../auth/GqlAuthGuard';
import { ContractService } from './contract.service';
import { ContractCreateInput } from './inputs/contractCreateInput';

@UseGuards(GqlAuthGuard)
@Resolver(() => Contract)
export class ContractResolver {
    constructor(private readonly ContractService: ContractService){}
    @Query(() => [Contract])
    async contracts(
        @Args({ name: 'where', type: () =>ContractWhereInput})
        where:ContractWhereInput
    ) {
        return await this.ContractService.getMany(where);
    }

    @Mutation(() => Contract)
    async createContract(
        @Args({ name: 'input', type: () => ContractCreateInput})
        data:ContractCreateInput
    ){
        return await this.ContractService.create(data);
    }
}
