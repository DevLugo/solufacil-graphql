import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";
import { CreatePhoneInput } from "../phone/types";
import { CreateAddressInput } from "../address/types";
import { Type } from 'class-transformer';
import { GraphQLDate } from "graphql-scalars";

@ObjectType()
export class PersonalData {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    curp!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;


    @Field(() => String, {nullable:false})
    firstName!: string;


    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => GraphQLDate, {nullable:false})
    birthDate: Date | string;


    /*@Field(() => [Document], {nullable:true})
    documents?: Array<Document>;
    */
    
    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    /* @Field(() => [Employee], {nullable:true})
    employee?: Array<Employee>; 

    @Field(() => [Borrower], {nullable:true})
    borrower?: Array<Borrower>;

    @Field(() => Loan, {nullable:true})
    Loan?: Loan | null;

    @Field(() => String, {nullable:true})
    loanId!: string | null; */

}

@InputType()
export class CreatePersonalDataInput {
    @Field(() => String, {nullable:false})
    curp!: string;
    
    @Field(() => String, {nullable:false})
    firstName!: string;
    
    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => [CreatePhoneInput], {nullable:false})
    phones: CreatePhoneInput[];

    @Field(() => [CreateAddressInput], {nullable:false})
    adresses: CreateAddressInput[];
}