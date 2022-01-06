import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { Prisma } from '@prisma/client';
import { BorrowerOrderByWithRelationInput } from '../borrower/borrower-order-by-with-relation.input';
import { EmployeeOrderByWithRelationInput } from '../employee/employee-order-by-with-relation.input';
import { DocumentOrderByRelationAggregateInput } from '../document/document-order-by-relation-aggregate.input';
import { LoanOrderByRelationAggregateInput } from '../loan/loan-order-by-relation-aggregate.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ContractOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: Prisma.Decimal;

    @Field(() => BorrowerOrderByWithRelationInput, {nullable:true})
    Borrower?: BorrowerOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    borrowerId?: keyof typeof SortOrder;

    @Field(() => EmployeeOrderByWithRelationInput, {nullable:true})
    Employee?: EmployeeOrderByWithRelationInput;

    @Field(() => DocumentOrderByRelationAggregateInput, {nullable:true})
    Documents?: DocumentOrderByRelationAggregateInput;

    @Field(() => LoanOrderByRelationAggregateInput, {nullable:true})
    Loans?: LoanOrderByRelationAggregateInput;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;
}
