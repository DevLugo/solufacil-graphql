import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerWhereInput } from './borrower-where.input';

@InputType()
export class BorrowerListRelationFilter {

    @Field(() => BorrowerWhereInput, {nullable:true})
    every?: BorrowerWhereInput;

    @Field(() => BorrowerWhereInput, {nullable:true})
    some?: BorrowerWhereInput;

    @Field(() => BorrowerWhereInput, {nullable:true})
    none?: BorrowerWhereInput;
}
