import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Borrower } from '../borrower/borrower.model';
import { Employee } from '../employee/employee.model';
import { Document } from '../document/document.model';
import { Loan } from '../loan/loan.model';
import { ContractCount } from './contract-count.output';

@ObjectType()
export class Contract {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: any;

    @Field(() => Borrower, {nullable:false})
    borrower?: Borrower;

    @Field(() => String, {nullable:false})
    borrowerId!: string;

    @Field(() => Employee, {nullable:true})
    employee?: Employee | null;

    @Field(() => [Document], {nullable:true})
    documents?: Array<Document>;

    @Field(() => [Loan], {nullable:true})
    loans?: Array<Loan>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    dueDate!: Date;

    @Field(() => Date, {nullable:false})
    signDate!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    employeeId!: string;

    @Field(() => ContractCount, {nullable:false})
    _count?: ContractCount;
}
