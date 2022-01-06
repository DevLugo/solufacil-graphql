import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { Prisma } from '@prisma/client';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ContractMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: Prisma.Decimal;

    @Field(() => SortOrder, {nullable:true})
    borrowerId?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;
}
