import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanCreateWithoutContractInput } from './loan-create-without-contract.input';

@InputType()
export class LoanCreateOrConnectWithoutContractInput {

    @Field(() => LoanWhereUniqueInput, {nullable:false})
    where!: LoanWhereUniqueInput;

    @Field(() => LoanCreateWithoutContractInput, {nullable:false})
    create!: LoanCreateWithoutContractInput;
}
