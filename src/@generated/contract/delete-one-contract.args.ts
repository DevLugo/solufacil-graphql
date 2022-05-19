import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';

@ArgsType()
export class DeleteOneContractArgs {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;
}
