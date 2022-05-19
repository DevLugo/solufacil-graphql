import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContractUpdateManyMutationInput } from './contract-update-many-mutation.input';
import { ContractWhereInput } from './contract-where.input';

@ArgsType()
export class UpdateManyContractArgs {

    @Field(() => ContractUpdateManyMutationInput, {nullable:false})
    data!: ContractUpdateManyMutationInput;

    @Field(() => ContractWhereInput, {nullable:true})
    where?: ContractWhereInput;
}
