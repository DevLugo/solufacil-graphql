import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@InputType()
export class ContractCreateManyInput {

    @HideField()
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Prisma.Decimal;

    @Field(() => String, {nullable:true})
    borrowerId?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    employeeId?: string;
}
