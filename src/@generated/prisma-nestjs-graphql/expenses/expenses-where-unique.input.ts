import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ExpensesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
