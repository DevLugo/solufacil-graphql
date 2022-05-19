import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContractTypeWhereUniqueInput } from './contract-type-where-unique.input';
import { ContractTypeCreateInput } from './contract-type-create.input';
import { ContractTypeUpdateInput } from './contract-type-update.input';

@ArgsType()
export class UpsertOneContractTypeArgs {

    @Field(() => ContractTypeWhereUniqueInput, {nullable:false})
    where!: ContractTypeWhereUniqueInput;

    @Field(() => ContractTypeCreateInput, {nullable:false})
    create!: ContractTypeCreateInput;

    @Field(() => ContractTypeUpdateInput, {nullable:false})
    update!: ContractTypeUpdateInput;
}
