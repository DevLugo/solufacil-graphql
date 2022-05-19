import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentCreateManyEmployeeInput } from './loan-payment-create-many-employee.input';

@InputType()
export class LoanPaymentCreateManyEmployeeInputEnvelope {

    @Field(() => [LoanPaymentCreateManyEmployeeInput], {nullable:false})
    data!: Array<LoanPaymentCreateManyEmployeeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
