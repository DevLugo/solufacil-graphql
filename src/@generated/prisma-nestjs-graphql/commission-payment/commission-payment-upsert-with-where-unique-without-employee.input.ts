import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentUpdateWithoutEmployeeInput } from './commission-payment-update-without-employee.input';
import { CommissionPaymentCreateWithoutEmployeeInput } from './commission-payment-create-without-employee.input';

@InputType()
export class CommissionPaymentUpsertWithWhereUniqueWithoutEmployeeInput {

    @Field(() => CommissionPaymentWhereUniqueInput, {nullable:false})
    where!: CommissionPaymentWhereUniqueInput;

    @Field(() => CommissionPaymentUpdateWithoutEmployeeInput, {nullable:false})
    update!: CommissionPaymentUpdateWithoutEmployeeInput;

    @Field(() => CommissionPaymentCreateWithoutEmployeeInput, {nullable:false})
    create!: CommissionPaymentCreateWithoutEmployeeInput;
}
