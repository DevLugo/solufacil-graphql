import { PaymentScheduleCreateWithoutCommissionPaymentInput } from './payment-schedule-create-without-commission-payment.input';
import { PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput } from './payment-schedule-create-or-connect-without-commission-payment.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
export declare class PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput {
    create?: PaymentScheduleCreateWithoutCommissionPaymentInput;
    connectOrCreate?: PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput;
    connect?: PaymentScheduleWhereUniqueInput;
}
