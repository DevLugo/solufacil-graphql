import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LoanState } from '../prisma/loan-state.enum';
import { LoanPayment } from '../loan-payment/loan-payment.model';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Contract } from '../contract/contract.model';
import { LoanCount } from './loan-count.output';

@ObjectType()
export class Loan {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => LoanState, {nullable:false})
    status!: keyof typeof LoanState;

    @Field(() => [LoanPayment], {nullable:true})
    payments?: Array<LoanPayment>;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Contract, {nullable:true})
    Contract?: Contract | null;

    @Field(() => String, {nullable:true})
    contractId!: string | null;

    @Field(() => LoanCount, {nullable:false})
    _count?: LoanCount;
}
