import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ContractTypeAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    monthDuration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maxRate?: keyof typeof SortOrder;
}
