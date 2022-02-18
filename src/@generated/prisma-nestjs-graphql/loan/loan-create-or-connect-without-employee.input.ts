import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanCreateWithoutEmployeeInput } from './loan-create-without-employee.input';

@InputType()
export class LoanCreateOrConnectWithoutEmployeeInput {

    @Field(() => LoanWhereUniqueInput, {nullable:false})
    where!: LoanWhereUniqueInput;

    @Field(() => LoanCreateWithoutEmployeeInput, {nullable:false})
    create!: LoanCreateWithoutEmployeeInput;
}
