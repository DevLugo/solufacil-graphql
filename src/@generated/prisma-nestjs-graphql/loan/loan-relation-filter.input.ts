import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanWhereInput } from './loan-where.input';

@InputType()
export class LoanRelationFilter {

    @Field(() => LoanWhereInput, {nullable:true})
    is?: LoanWhereInput;

    @Field(() => LoanWhereInput, {nullable:true})
    isNot?: LoanWhereInput;
}
