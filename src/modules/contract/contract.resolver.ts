import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ContractCreateInput } from '../../@generated/contract/contract-create.input';
import { ContractWhereInput } from '../../@generated/contract/contract-where.input';
import { Contract } from '../../@generated/contract/contract.model';
import { GqlAuthGuard } from '../auth/GqlAuthGuard';
import { ContractService } from './contract.service';

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
        return {}
        //return await this.ContractService.create(data);
    }
}
