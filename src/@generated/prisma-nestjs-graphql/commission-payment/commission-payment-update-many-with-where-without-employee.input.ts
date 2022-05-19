import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentScalarWhereInput } from './commission-payment-scalar-where.input';
import { CommissionPaymentUpdateManyMutationInput } from './commission-payment-update-many-mutation.input';

@InputType()
export class CommissionPaymentUpdateManyWithWhereWithoutEmployeeInput {

    @Field(() => CommissionPaymentScalarWhereInput, {nullable:false})
    where!: CommissionPaymentScalarWhereInput;

    @Field(() => CommissionPaymentUpdateManyMutationInput, {nullable:false})
    data!: CommissionPaymentUpdateManyMutationInput;
}
