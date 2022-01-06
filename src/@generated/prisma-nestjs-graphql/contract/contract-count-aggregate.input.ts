import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ContractCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: Prisma.Decimal;

    @Field(() => Boolean, {nullable:true})
    borrowerId?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    employeeId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
