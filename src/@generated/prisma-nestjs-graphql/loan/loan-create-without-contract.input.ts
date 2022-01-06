import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanState } from '../prisma/loan-state.enum';
import { HideField } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { LoanPaymentCreateNestedManyWithoutLoanInput } from '../loan-payment/loan-payment-create-nested-many-without-loan.input';

@InputType()
export class LoanCreateWithoutContractInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    status!: keyof typeof LoanState;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: any;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => LoanPaymentCreateNestedManyWithoutLoanInput, {nullable:true})
    payments?: LoanPaymentCreateNestedManyWithoutLoanInput;
}
