import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutCommissionPaymentInput } from './employee-create-without-commission-payment.input';
import { EmployeeCreateOrConnectWithoutCommissionPaymentInput } from './employee-create-or-connect-without-commission-payment.input';
import { EmployeeUpsertWithoutCommissionPaymentInput } from './employee-upsert-without-commission-payment.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutCommissionPaymentInput } from './employee-update-without-commission-payment.input';

@InputType()
export class EmployeeUpdateOneRequiredWithoutCommissionPaymentInput {

    @Field(() => EmployeeCreateWithoutCommissionPaymentInput, {nullable:true})
    create?: EmployeeCreateWithoutCommissionPaymentInput;

    @Field(() => EmployeeCreateOrConnectWithoutCommissionPaymentInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutCommissionPaymentInput;

    @Field(() => EmployeeUpsertWithoutCommissionPaymentInput, {nullable:true})
    upsert?: EmployeeUpsertWithoutCommissionPaymentInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutCommissionPaymentInput, {nullable:true})
    update?: EmployeeUpdateWithoutCommissionPaymentInput;
}
