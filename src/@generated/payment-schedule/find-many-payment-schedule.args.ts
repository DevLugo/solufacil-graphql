import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentScheduleWhereInput } from './payment-schedule-where.input';
import { PaymentScheduleOrderByWithRelationInput } from './payment-schedule-order-by-with-relation.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PaymentScheduleScalarFieldEnum } from './payment-schedule-scalar-field.enum';

@ArgsType()
export class FindManyPaymentScheduleArgs {

    @Field(() => PaymentScheduleWhereInput, {nullable:true})
    where?: PaymentScheduleWhereInput;

    @Field(() => [PaymentScheduleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PaymentScheduleOrderByWithRelationInput>;

    @Field(() => PaymentScheduleWhereUniqueInput, {nullable:true})
    cursor?: PaymentScheduleWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PaymentScheduleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PaymentScheduleScalarFieldEnum>;
}
