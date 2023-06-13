import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Comment {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => ID, {nullable:false})
    employeeId!: string;

    @Field(() => ID, {nullable:false})
    loanPaymentId!: string;

    @Field(() => String, {nullable:false})
    text!: string;


    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

}