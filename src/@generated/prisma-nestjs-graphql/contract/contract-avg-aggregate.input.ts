import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class ContractAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amount?: Prisma.Decimal;
}
