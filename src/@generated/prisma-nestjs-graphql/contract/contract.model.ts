import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Borrower } from '../borrower/borrower.model';
import { Employee } from '../employee/employee.model';
import { Document } from '../document/document.model';
import { Loan } from '../loan/loan.model';
import { ContractType } from '../contract-type/contract-type.model';
import { ContractCount } from './contract-count.output';

@ObjectType()
export class Contract {

    @Field(() => ID, {nullable:false})
    id!: string;

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

    @Field(() => ContractType, {nullable:false})
    contractType?: ContractType;

    @Field(() => String, {nullable:false})
    contractTypeId!: string;

    @Field(() => ContractCount, {nullable:false})
    _count?: ContractCount;
}
