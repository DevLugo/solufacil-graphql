import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanPaymentWhereInput } from './loan-payment-where.input';
import { LoanPaymentOrderByWithRelationInput } from './loan-payment-order-by-with-relation.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LoanPaymentScalarFieldEnum } from './loan-payment-scalar-field.enum';

@ArgsType()
export class FindManyLoanPaymentArgs {

    @Field(() => LoanPaymentWhereInput, {nullable:true})
    where?: LoanPaymentWhereInput;

    @Field(() => [LoanPaymentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LoanPaymentOrderByWithRelationInput>;

    @Field(() => LoanPaymentWhereUniqueInput, {nullable:true})
    cursor?: LoanPaymentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LoanPaymentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LoanPaymentScalarFieldEnum>;
}
