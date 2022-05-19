import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutCommissionPaymentInput } from './employee-update-without-commission-payment.input';
import { EmployeeCreateWithoutCommissionPaymentInput } from './employee-create-without-commission-payment.input';

@InputType()
export class EmployeeUpsertWithoutCommissionPaymentInput {

    @Field(() => EmployeeUpdateWithoutCommissionPaymentInput, {nullable:false})
    update!: EmployeeUpdateWithoutCommissionPaymentInput;

    @Field(() => EmployeeCreateWithoutCommissionPaymentInput, {nullable:false})
    create!: EmployeeCreateWithoutCommissionPaymentInput;
}
