import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { AccountType } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { GraphQLDecimal } from "prisma-graphql-type-decimal";

registerEnumType(AccountType, {
    name: 'AccountType',
});

@ObjectType()
export class Account {
    @Field(() => ID, { nullable:false })
    id!: string;   

    @Field(() => String, { nullable:false })
    name!: string

    @Field(() => AccountType, { nullable:false })
    type!: keyof typeof AccountType;

    @Field(() => GraphQLDecimal, { nullable: false })
    amount!: Decimal;
}