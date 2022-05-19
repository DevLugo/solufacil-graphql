import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExpensesWhereInput } from './expenses-where.input';
import { ExpensesOrderByWithRelationInput } from './expenses-order-by-with-relation.input';
import { ExpensesWhereUniqueInput } from './expenses-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExpensesScalarFieldEnum } from './expenses-scalar-field.enum';

@ArgsType()
export class FindManyExpensesArgs {

    @Field(() => ExpensesWhereInput, {nullable:true})
    where?: ExpensesWhereInput;

    @Field(() => [ExpensesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExpensesOrderByWithRelationInput>;

    @Field(() => ExpensesWhereUniqueInput, {nullable:true})
    cursor?: ExpensesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ExpensesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ExpensesScalarFieldEnum>;
}
