import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithoutEmployeeInput } from './loan-update-without-employee.input';

@InputType()
export class LoanUpdateWithWhereUniqueWithoutEmployeeInput {

    @Field(() => LoanWhereUniqueInput, {nullable:false})
    where!: LoanWhereUniqueInput;

    @Field(() => LoanUpdateWithoutEmployeeInput, {nullable:false})
    data!: LoanUpdateWithoutEmployeeInput;
}
