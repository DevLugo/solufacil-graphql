import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ContractTypeCreateInput } from '../../@generated/prisma-nestjs-graphql/contract-type/contract-type-create.input';
import { ContractType } from '../../@generated/prisma-nestjs-graphql/contract-type/contract-type.model';
import { ContractTypeService } from './contract-type.service';

@Resolver(() => ContractType)
export class ContractTypeResolver {
    constructor(private readonly contractTypeService: ContractTypeService){}
    @Query(() => [ContractType])
    async contractTypes() {
        return await this.contractTypeService.getMany();
    }

    @Mutation(() => ContractType)
    async createContractType(
        @Args({ name: 'input', type: () => ContractTypeCreateInput})
        data: ContractTypeCreateInput
    ){
        return await this.contractTypeService.create(data);
    }
}
