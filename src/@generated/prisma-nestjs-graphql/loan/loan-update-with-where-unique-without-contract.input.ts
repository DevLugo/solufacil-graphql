import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithoutContractInput } from './loan-update-without-contract.input';

@InputType()
export class LoanUpdateWithWhereUniqueWithoutContractInput {

    @Field(() => LoanWhereUniqueInput, {nullable:false})
    where!: LoanWhereUniqueInput;

    @Field(() => LoanUpdateWithoutContractInput, {nullable:false})
    data!: LoanUpdateWithoutContractInput;
}
