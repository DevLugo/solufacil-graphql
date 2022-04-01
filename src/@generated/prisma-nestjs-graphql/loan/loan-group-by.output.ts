import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LoanState } from '../prisma/loan-state.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { LoanCountAggregate } from './loan-count-aggregate.output';
import { LoanAvgAggregate } from './loan-avg-aggregate.output';
import { LoanSumAggregate } from './loan-sum-aggregate.output';
import { LoanMinAggregate } from './loan-min-aggregate.output';
import { LoanMaxAggregate } from './loan-max-aggregate.output';

@ObjectType()
export class LoanGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => LoanState, {nullable:false})
    status!: keyof typeof LoanState;

    @Field(() => GraphQLDecimal, {nullable:false})
    weeklyPaymentAmount!: any;

    @Field(() => GraphQLDecimal, {nullable:false})
    amountToPay!: any;

    @Field(() => Date, {nullable:false})
    signDate!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    contractId!: string;

    @Field(() => String, {nullable:false})
    loantypeId!: string;

    @Field(() => String, {nullable:false})
    employeeId!: string;

    @Field(() => LoanCountAggregate, {nullable:true})
    _count?: LoanCountAggregate;

    @Field(() => LoanAvgAggregate, {nullable:true})
    _avg?: LoanAvgAggregate;

    @Field(() => LoanSumAggregate, {nullable:true})
    _sum?: LoanSumAggregate;

    @Field(() => LoanMinAggregate, {nullable:true})
    _min?: LoanMinAggregate;

    @Field(() => LoanMaxAggregate, {nullable:true})
    _max?: LoanMaxAggregate;
}
