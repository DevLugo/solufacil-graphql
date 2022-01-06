import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LoanCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @HideField()
    status?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    contractId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
