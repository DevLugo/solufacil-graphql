import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LoanPaymentMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    numeration?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @HideField()
    status?: true;

    @Field(() => Boolean, {nullable:true})
    paidDate?: true;

    @Field(() => Boolean, {nullable:true})
    dueDate?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    loanId?: true;
}
