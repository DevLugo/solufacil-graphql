import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';
import { ExpensesUpdateWithoutEmployeeInput } from './expenses-update-without-employee.input';

@InputType()
export class ExpensesUpdateWithWhereUniqueWithoutEmployeeInput {

    @Field(() => ExpensesWhereUniqueInput, {nullable:false})
    where!: ExpensesWhereUniqueInput;

    @Field(() => ExpensesUpdateWithoutEmployeeInput, {nullable:false})
    data!: ExpensesUpdateWithoutEmployeeInput;
}
