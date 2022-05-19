import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithoutBorrowerInput } from './contract-update-without-borrower.input';

@InputType()
export class ContractUpdateWithWhereUniqueWithoutBorrowerInput {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;

    @Field(() => ContractUpdateWithoutBorrowerInput, {nullable:false})
    data!: ContractUpdateWithoutBorrowerInput;
}
