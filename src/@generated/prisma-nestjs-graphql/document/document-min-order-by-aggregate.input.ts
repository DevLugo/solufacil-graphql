import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DocumentMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    borrowerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contractId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;
}
