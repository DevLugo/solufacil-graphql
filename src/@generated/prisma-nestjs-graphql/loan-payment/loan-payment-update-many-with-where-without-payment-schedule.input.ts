import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentScalarWhereInput } from './loan-payment-scalar-where.input';
import { LoanPaymentUpdateManyMutationInput } from './loan-payment-update-many-mutation.input';

@InputType()
export class LoanPaymentUpdateManyWithWhereWithoutPaymentScheduleInput {

    @Field(() => LoanPaymentScalarWhereInput, {nullable:false})
    where!: LoanPaymentScalarWhereInput;

    @Field(() => LoanPaymentUpdateManyMutationInput, {nullable:false})
    data!: LoanPaymentUpdateManyMutationInput;
}
