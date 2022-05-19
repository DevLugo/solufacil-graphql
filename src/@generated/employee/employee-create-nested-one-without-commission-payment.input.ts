import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutCommissionPaymentInput } from './employee-create-without-commission-payment.input';
import { EmployeeCreateOrConnectWithoutCommissionPaymentInput } from './employee-create-or-connect-without-commission-payment.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedOneWithoutCommissionPaymentInput {

    @Field(() => EmployeeCreateWithoutCommissionPaymentInput, {nullable:true})
    create?: EmployeeCreateWithoutCommissionPaymentInput;

    @Field(() => EmployeeCreateOrConnectWithoutCommissionPaymentInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutCommissionPaymentInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;
}
