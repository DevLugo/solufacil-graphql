import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PersonalData {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

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