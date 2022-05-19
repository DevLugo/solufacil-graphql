import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanPaymentCreateWithoutPaymentSchedulesInput } from './loan-payment-create-without-payment-schedules.input';
import { LoanPaymentCreateOrConnectWithoutPaymentSchedulesInput } from './loan-payment-create-or-connect-without-payment-schedules.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';

@InputType()
export class LoanPaymentUncheckedCreateNestedManyWithoutPaymentSchedulesInput {

    @Field(() => [LoanPaymentCreateWithoutPaymentSchedulesInput], {nullable:true})
    create?: Array<LoanPaymentCreateWithoutPaymentSchedulesInput>;

    @Field(() => [LoanPaymentCreateOrConnectWithoutPaymentSchedulesInput], {nullable:true})
    connectOrCreate?: Array<LoanPaymentCreateOrConnectWithoutPaymentSchedulesInput>;

    @Field(() => [LoanPaymentWhereUniqueInput], {nullable:true})
    connect?: Array<LoanPaymentWhereUniqueInput>;
}
