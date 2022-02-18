import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ContractCreateInput } from '../../@generated/prisma-nestjs-graphql/contract/contract-create.input';
import { Contract } from '../../@generated/prisma-nestjs-graphql/contract/contract.model';
import { GqlAuthGuard } from '../auth/GqlAuthGuard';
import { ContractService } from './contract.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => Contract)
export class ContractResolver {
    constructor(private readonly ContractService: ContractService){}
    @Query(() => [Contract])
    async contracts() {
        return await this.ContractService.getMany();
    }

    @Mutation(() => Contract)
    async createContract(
        @Args({ name: 'input', type: () => ContractCreateInput})
        data:ContractCreateInput
    ){
        return await this.ContractService.create(data);
    }
}
