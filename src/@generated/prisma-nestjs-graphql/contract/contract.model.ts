import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Prisma } from '@prisma/client';
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
    amount!: Prisma.Decimal;

    @Field(() => Borrower, {nullable:true})
    Borrower?: Borrower | null;

    @Field(() => String, {nullable:true})
    borrowerId!: string | null;

    @Field(() => Employee, {nullable:true})
    Employee?: Employee | null;

    @Field(() => [Document], {nullable:true})
    Documents?: Array<Document>;

    @Field(() => [Loan], {nullable:true})
    Loans?: Array<Loan>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    employeeId!: string | null;

    @Field(() => ContractCount, {nullable:false})
    _count?: ContractCount;
}
