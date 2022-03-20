import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BorrowerOrderByWithRelationInput } from '../borrower/borrower-order-by-with-relation.input';
import { EmployeeOrderByWithRelationInput } from '../employee/employee-order-by-with-relation.input';
import { AvalOrderByWithRelationInput } from '../aval/aval-order-by-with-relation.input';
import { ContractOrderByWithRelationInput } from '../contract/contract-order-by-with-relation.input';

@InputType()
export class DocumentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => BorrowerOrderByWithRelationInput, {nullable:true})
    borrower?: BorrowerOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    borrowerId?: keyof typeof SortOrder;

    @Field(() => EmployeeOrderByWithRelationInput, {nullable:true})
    employee?: EmployeeOrderByWithRelationInput;

    @Field(() => AvalOrderByWithRelationInput, {nullable:true})
    aval?: AvalOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    avalId?: keyof typeof SortOrder;

    @Field(() => ContractOrderByWithRelationInput, {nullable:true})
    contract?: ContractOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    contractId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;
}
