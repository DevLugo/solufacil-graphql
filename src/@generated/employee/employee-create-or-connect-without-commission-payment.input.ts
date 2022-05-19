import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutCommissionPaymentInput } from './employee-create-without-commission-payment.input';

@InputType()
export class EmployeeCreateOrConnectWithoutCommissionPaymentInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutCommissionPaymentInput, {nullable:false})
    create!: EmployeeCreateWithoutCommissionPaymentInput;
}
