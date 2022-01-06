import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContractTypeUpdateManyMutationInput } from './contract-type-update-many-mutation.input';
import { ContractTypeWhereInput } from './contract-type-where.input';

@ArgsType()
export class UpdateManyContractTypeArgs {

    @Field(() => ContractTypeUpdateManyMutationInput, {nullable:false})
    data!: ContractTypeUpdateManyMutationInput;

    @Field(() => ContractTypeWhereInput, {nullable:true})
    where?: ContractTypeWhereInput;
}
