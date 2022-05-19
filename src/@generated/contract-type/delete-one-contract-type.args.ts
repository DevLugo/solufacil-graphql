import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContractTypeWhereUniqueInput } from './contract-type-where-unique.input';

@ArgsType()
export class DeleteOneContractTypeArgs {

    @Field(() => ContractTypeWhereUniqueInput, {nullable:false})
    where!: ContractTypeWhereUniqueInput;
}
