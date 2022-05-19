import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';
import { CommissionPaymentCreateWithoutEmployeeInput } from './commission-payment-create-without-employee.input';

@InputType()
export class CommissionPaymentCreateOrConnectWithoutEmployeeInput {

    @Field(() => CommissionPaymentWhereUniqueInput, {nullable:false})
    where!: CommissionPaymentWhereUniqueInput;

    @Field(() => CommissionPaymentCreateWithoutEmployeeInput, {nullable:false})
    create!: CommissionPaymentCreateWithoutEmployeeInput;
}
