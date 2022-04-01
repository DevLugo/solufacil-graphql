import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExpensesCreateManyUserInput } from './expenses-create-many-user.input';

@InputType()
export class ExpensesCreateManyUserInputEnvelope {

    @Field(() => [ExpensesCreateManyUserInput], {nullable:false})
    data!: Array<ExpensesCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
