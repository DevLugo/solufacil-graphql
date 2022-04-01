import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LoanState } from '../prisma/loan-state.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class LoanMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => LoanState, {nullable:true})
    status?: keyof typeof LoanState;

    @Field(() => GraphQLDecimal, {nullable:true})
    weeklyPaymentAmount?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    amountToPay?: any;

    @Field(() => Date, {nullable:true})
    signDate?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    contractId?: string;

    @Field(() => String, {nullable:true})
    loantypeId?: string;

    @Field(() => String, {nullable:true})
    employeeId?: string;
}
