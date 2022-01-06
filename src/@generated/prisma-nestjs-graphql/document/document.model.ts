import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { DocumentType } from '../prisma/document-type.enum';
import { Borrower } from '../borrower/borrower.model';
import { Employee } from '../employee/employee.model';
import { Aval } from '../aval/aval.model';
import { Contract } from '../contract/contract.model';

@ObjectType()
export class Document {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => DocumentType, {nullable:false})
    type!: keyof typeof DocumentType;

    @Field(() => Borrower, {nullable:true})
    Borrower?: Borrower | null;

    @Field(() => String, {nullable:true})
    borrowerId!: string | null;

    @Field(() => Employee, {nullable:true})
    Employee?: Employee | null;

    @Field(() => Aval, {nullable:true})
    aval?: Aval | null;

    @Field(() => String, {nullable:true})
    avalId!: string | null;

    @Field(() => Contract, {nullable:true})
    Contract?: Contract | null;

    @Field(() => String, {nullable:true})
    contractId!: string | null;

    @Field(() => String, {nullable:true})
    employeeId!: string | null;
}
