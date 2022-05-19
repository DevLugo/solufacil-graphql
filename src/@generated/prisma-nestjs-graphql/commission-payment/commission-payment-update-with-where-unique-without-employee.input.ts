import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentUpdateWithoutEmployeeInput } from './commission-payment-update-without-employee.input';

@InputType()
export class CommissionPaymentUpdateWithWhereUniqueWithoutEmployeeInput {

    @Field(() => CommissionPaymentWhereUniqueInput, {nullable:false})
    where!: CommissionPaymentWhereUniqueInput;

    @Field(() => CommissionPaymentUpdateWithoutEmployeeInput, {nullable:false})
    data!: CommissionPaymentUpdateWithoutEmployeeInput;
}
