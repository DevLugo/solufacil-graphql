import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Borrower } from '../borrower/borrower.model';
import { Employee } from '../employee/employee.model';
import { Aval } from '../aval/aval.model';

@ObjectType()
export class Phone {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    number!: string;

    @Field(() => Borrower, {nullable:true})
    Borrower?: Borrower | null;

    @Field(() => String, {nullable:true})
    borrowerId!: string | null;

    @Field(() => Employee, {nullable:true})
    Employee?: Employee | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Aval, {nullable:true})
    aval?: Aval | null;

    @Field(() => String, {nullable:true})
    avalId!: string | null;

    @Field(() => String, {nullable:true})
    employeeId!: string | null;
}
