import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LoanPaymentCount {

    @Field(() => Int, {nullable:false})
    paymentSchedules?: number;
}
