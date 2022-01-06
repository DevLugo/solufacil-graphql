import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BorrowerOrderByWithRelationInput } from '../borrower/borrower-order-by-with-relation.input';
import { EmployeeOrderByWithRelationInput } from '../employee/employee-order-by-with-relation.input';
import { AvalOrderByWithRelationInput } from '../aval/aval-order-by-with-relation.input';

@InputType()
export class PhoneOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;

    @Field(() => BorrowerOrderByWithRelationInput, {nullable:true})
    Borrower?: BorrowerOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    borrowerId?: keyof typeof SortOrder;

    @Field(() => EmployeeOrderByWithRelationInput, {nullable:true})
    Employee?: EmployeeOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => AvalOrderByWithRelationInput, {nullable:true})
    aval?: AvalOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    avalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;
}
