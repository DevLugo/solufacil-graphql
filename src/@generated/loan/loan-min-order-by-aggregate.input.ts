import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LoanMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weeklyPaymentAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amountToPay?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    signDate?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contractId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    loantypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;
}
