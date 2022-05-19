import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';
import { ExpensesCreateWithoutEmployeeInput } from './expenses-create-without-employee.input';

@InputType()
export class ExpensesCreateOrConnectWithoutEmployeeInput {

    @Field(() => ExpensesWhereUniqueInput, {nullable:false})
    where!: ExpensesWhereUniqueInput;

    @Field(() => ExpensesCreateWithoutEmployeeInput, {nullable:false})
    create!: ExpensesCreateWithoutEmployeeInput;
}
