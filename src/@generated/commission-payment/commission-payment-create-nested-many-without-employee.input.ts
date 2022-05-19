import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentCreateWithoutEmployeeInput } from './commission-payment-create-without-employee.input';
import { CommissionPaymentCreateOrConnectWithoutEmployeeInput } from './commission-payment-create-or-connect-without-employee.input';
import { CommissionPaymentCreateManyEmployeeInputEnvelope } from './commission-payment-create-many-employee-input-envelope.input';
import { CommissionPaymentWhereUniqueInput } from './commission-payment-where-unique.input';

@InputType()
export class CommissionPaymentCreateNestedManyWithoutEmployeeInput {

    @Field(() => [CommissionPaymentCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<CommissionPaymentCreateWithoutEmployeeInput>;

    @Field(() => [CommissionPaymentCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<CommissionPaymentCreateOrConnectWithoutEmployeeInput>;

    @Field(() => CommissionPaymentCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: CommissionPaymentCreateManyEmployeeInputEnvelope;

    @Field(() => [CommissionPaymentWhereUniqueInput], {nullable:true})
    connect?: Array<CommissionPaymentWhereUniqueInput>;
}
