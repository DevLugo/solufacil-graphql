import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Loan } from '../loan/loan.model';
import { ComissionPaymentConfiguration } from '../comission-payment-configuration/comission-payment-configuration.model';
import { LoantypeCount } from './loantype-count.output';

@ObjectType()
export class Loantype {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    weekDuration!: number;

    @Field(() => Float, {nullable:false})
    rate!: number;

    @Field(() => Float, {nullable:false})
    overdueRate!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Loan], {nullable:true})
    Loan?: Array<Loan>;

    @Field(() => [ComissionPaymentConfiguration], {nullable:true})
    ComissionPaymentConfiguration?: Array<ComissionPaymentConfiguration>;

    @Field(() => LoantypeCount, {nullable:false})
    _count?: LoantypeCount;
}
