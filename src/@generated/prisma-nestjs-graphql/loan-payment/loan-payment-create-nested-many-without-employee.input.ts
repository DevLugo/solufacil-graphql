import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentCreateWithoutEmployeeInput } from './loan-payment-create-without-employee.input';
import { LoanPaymentCreateOrConnectWithoutEmployeeInput } from './loan-payment-create-or-connect-without-employee.input';
import { LoanPaymentCreateManyEmployeeInputEnvelope } from './loan-payment-create-many-employee-input-envelope.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';

@InputType()
export class LoanPaymentCreateNestedManyWithoutEmployeeInput {

    @Field(() => [LoanPaymentCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<LoanPaymentCreateWithoutEmployeeInput>;

    @Field(() => [LoanPaymentCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<LoanPaymentCreateOrConnectWithoutEmployeeInput>;

    @Field(() => LoanPaymentCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: LoanPaymentCreateManyEmployeeInputEnvelope;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    connect?: Array<LoanPaymentWhereUniqueInput>;
}
