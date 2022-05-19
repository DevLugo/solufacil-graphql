import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractCreateInput } from './contract-create.input';
import { ContractUpdateInput } from './contract-update.input';

@ArgsType()
export class UpsertOneContractArgs {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;

    @Field(() => ContractCreateInput, {nullable:false})
    create!: ContractCreateInput;

    @Field(() => ContractUpdateInput, {nullable:false})
    update!: ContractUpdateInput;
}
