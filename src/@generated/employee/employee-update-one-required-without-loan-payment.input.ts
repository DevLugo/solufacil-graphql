import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutLoanPaymentInput } from './employee-create-without-loan-payment.input';
import { EmployeeCreateOrConnectWithoutLoanPaymentInput } from './employee-create-or-connect-without-loan-payment.input';
import { EmployeeUpsertWithoutLoanPaymentInput } from './employee-upsert-without-loan-payment.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutLoanPaymentInput } from './employee-update-without-loan-payment.input';

@InputType()
export class EmployeeUpdateOneRequiredWithoutLoanPaymentInput {

    @Field(() => EmployeeCreateWithoutLoanPaymentInput, {nullable:true})
    create?: EmployeeCreateWithoutLoanPaymentInput;

    @Field(() => EmployeeCreateOrConnectWithoutLoanPaymentInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutLoanPaymentInput;

    @Field(() => EmployeeUpsertWithoutLoanPaymentInput, {nullable:true})
    upsert?: EmployeeUpsertWithoutLoanPaymentInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutLoanPaymentInput, {nullable:true})
    update?: EmployeeUpdateWithoutLoanPaymentInput;
}
