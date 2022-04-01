import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LoanMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @HideField()
    status?: true;

    @Field(() => Boolean, {nullable:true})
    weeklyPaymentAmount?: true;

    @Field(() => Boolean, {nullable:true})
    amountToPay?: true;

    @Field(() => Boolean, {nullable:true})
    signDate?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    contractId?: true;

    @Field(() => Boolean, {nullable:true})
    loantypeId?: true;

    @Field(() => Boolean, {nullable:true})
    employeeId?: true;
}
