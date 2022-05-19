import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { BorrowerOrderByWithRelationInput } from '../borrower/borrower-order-by-with-relation.input';

@InputType()
export class LocalOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BorrowerOrderByWithRelationInput, {nullable:true})
    borrower?: BorrowerOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    borrowerId?: keyof typeof SortOrder;
}
