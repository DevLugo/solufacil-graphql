import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';

@ArgsType()
export class FindUniqueContractArgs {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;
}
