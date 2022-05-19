import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ComissionPaymentConfigurationCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    employeeType?: true;

    @Field(() => Boolean, {nullable:true})
    loantypeId?: true;

    @Field(() => Boolean, {nullable:true})
    commissionGoalType?: true;

    @Field(() => Boolean, {nullable:true})
    commissionType?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
