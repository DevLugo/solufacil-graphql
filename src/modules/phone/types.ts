import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Phone {
    @Field(() => ID, {nullable:false})
    id!: string;
    
    @Field(() => String, {nullable:false})
    number!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

}


export class CreatePhoneInput {
    @Field(() => String, {nullable:false})
    number!: string;
}