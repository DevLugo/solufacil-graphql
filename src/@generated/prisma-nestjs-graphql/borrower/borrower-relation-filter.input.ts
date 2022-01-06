import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerWhereInput } from './borrower-where.input';

@InputType()
export class BorrowerRelationFilter {

    @Field(() => BorrowerWhereInput, {nullable:true})
    is?: BorrowerWhereInput;

    @Field(() => BorrowerWhereInput, {nullable:true})
    isNot?: BorrowerWhereInput;
}
