import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithoutEmployeeInput } from './loan-update-without-employee.input';
import { LoanCreateWithoutEmployeeInput } from './loan-create-without-employee.input';

@InputType()
export class LoanUpsertWithWhereUniqueWithoutEmployeeInput {

    @Field(() => LoanWhereUniqueInput, {nullable:false})
    where!: LoanWhereUniqueInput;

    @Field(() => LoanUpdateWithoutEmployeeInput, {nullable:false})
    update!: LoanUpdateWithoutEmployeeInput;

    @Field(() => LoanCreateWithoutEmployeeInput, {nullable:false})
    create!: LoanCreateWithoutEmployeeInput;
}
