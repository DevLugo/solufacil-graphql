import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ContractAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    amount?: Prisma.Decimal;
}
