import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanWhereInput } from './loan-where.input';

@InputType()
export class LoanListRelationFilter {

    @Field(() => LoanWhereInput, {nullable:true})
    every?: LoanWhereInput;

    @Field(() => LoanWhereInput, {nullable:true})
    some?: LoanWhereInput;

    @Field(() => LoanWhereInput, {nullable:true})
    none?: LoanWhereInput;
}
