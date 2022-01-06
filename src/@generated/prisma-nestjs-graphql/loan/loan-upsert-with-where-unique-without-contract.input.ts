import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithoutContractInput } from './loan-update-without-contract.input';
import { LoanCreateWithoutContractInput } from './loan-create-without-contract.input';

@InputType()
export class LoanUpsertWithWhereUniqueWithoutContractInput {

    @Field(() => LoanWhereUniqueInput, {nullable:false})
    where!: LoanWhereUniqueInput;

    @Field(() => LoanUpdateWithoutContractInput, {nullable:false})
    update!: LoanUpdateWithoutContractInput;

    @Field(() => LoanCreateWithoutContractInput, {nullable:false})
    create!: LoanCreateWithoutContractInput;
}
