import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpensesCreateManyInput } from './expenses-create-many.input';

@ArgsType()
export class CreateManyExpensesArgs {

    @Field(() => [ExpensesCreateManyInput], {nullable:false})
    data!: Array<ExpensesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
