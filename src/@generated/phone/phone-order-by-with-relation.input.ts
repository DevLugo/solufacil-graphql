import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BorrowerOrderByWithRelationInput } from '../borrower/borrower-order-by-with-relation.input';
import { HideField } from '@nestjs/graphql';
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

    @HideField()
    borrowerId?: keyof typeof SortOrder;

    @HideField()
    Employee?: EmployeeOrderByWithRelationInput;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => AvalOrderByWithRelationInput, {nullable:true})
    aval?: AvalOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    avalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;
}
