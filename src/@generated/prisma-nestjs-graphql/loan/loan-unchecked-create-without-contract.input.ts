import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanState } from '../prisma/loan-state.enum';
import { HideField } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { LoanPaymentUncheckedCreateNestedManyWithoutLoanInput } from '../loan-payment/loan-payment-unchecked-create-nested-many-without-loan.input';

@InputType()
export class LoanUncheckedCreateWithoutContractInput {

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

    @Field(() => LoanPaymentUncheckedCreateNestedManyWithoutLoanInput, {nullable:true})
    payments?: LoanPaymentUncheckedCreateNestedManyWithoutLoanInput;
}
