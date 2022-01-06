import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContractTypeUpdateInput } from './contract-type-update.input';
import { ContractTypeWhereUniqueInput } from './contract-type-where-unique.input';

@ArgsType()
export class UpdateOneContractTypeArgs {

    @Field(() => ContractTypeUpdateInput, {nullable:false})
    data!: ContractTypeUpdateInput;

    @Field(() => ContractTypeWhereUniqueInput, {nullable:false})
    where!: ContractTypeWhereUniqueInput;
}
