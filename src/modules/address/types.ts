import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Address {
    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    street!: string;

    @Field(() => String, {nullable:true})
    exteriorNumber!: string | null;

    @Field(() => String, {nullable:false})
    interiorNumber!: string;

    @Field(() => String, {nullable:false})
    postalCode!: string;

    @Field(() => String, {nullable:true})
    references!: string | null;

    @Field(() => ID, {nullable:false})
    locationId!: string;
}

@InputType()
export class CreateAddressInput {
    @Field(() => String, {nullable:false})
    street!: string;

    @Field(() => String, {nullable:false})
    exteriorNumber!: string | null;

    @Field(() => String, {nullable:false})
    locationId!: string;

    @Field(() => String, {nullable:true})
    interiorNumber: string;

    @Field(() => String, {nullable:false})
    postalCode!: string;

    @Field(() => String, {nullable:true})
    references!: string | null;
}