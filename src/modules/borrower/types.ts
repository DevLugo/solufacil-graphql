import { Field, ID, InputType, Int, ObjectType } from "@nestjs/graphql";
import { PersonalData } from "../personal-data/types";

@ObjectType()
export class Borrower {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false,defaultValue:0})
    loanFinishedCount!: number;

    @Field(() => String, {nullable:false})
    personalDataId!: string;

    @Field(() => String, {nullable:true})
    grantorId!: string | null;
}

@InputType()
export class EmployeeWhereInput {
    @Field(() => ID, {nullable:true})
    locationId?: string;
}