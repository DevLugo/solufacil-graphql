import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpensesCreateManyEmployeeInput } from './expenses-create-many-employee.input';

@InputType()
export class ExpensesCreateManyEmployeeInputEnvelope {

    @Field(() => [ExpensesCreateManyEmployeeInput], {nullable:false})
    data!: Array<ExpensesCreateManyEmployeeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
