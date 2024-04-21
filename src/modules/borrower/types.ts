import { Field, ID, InputType, Int, ObjectType } from "@nestjs/graphql";
import { CreatePersonalDataInput, PersonalData } from "../personal-data/types";
//import { IsEmail, IsString, ValidateIf, Validator} from 'class-validator';
import * as Validator from 'class-validator';

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
}

@InputType()
export class BorrowerWhereInput {
    @Field(() => ID, {nullable:true})
    locationId?: string;

    @Field(() => ID, {nullable:true})
    leadId?: string;
}

@InputType()
export class BorrowerWhereUniqueInput {
    @Field(() => ID, {nullable:true})
    id?: string;
}


@InputType()
export class BorrowerCreateInput {
  @Field(() => String, { nullable: true })
  email?: string;

  /* @Field(() => [DocumentCreateInput], { nullable: true })
  documents?: DocumentCreateInput[]; */

  @Field(() => CreatePersonalDataInput)
  personalData: CreatePersonalDataInput;
}
