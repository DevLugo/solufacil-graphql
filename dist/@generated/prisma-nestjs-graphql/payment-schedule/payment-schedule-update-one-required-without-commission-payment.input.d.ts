import { PaymentScheduleCreateWithoutCommissionPaymentInput } from './payment-schedule-create-without-commission-payment.input';
import { PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput } from './payment-schedule-create-or-connect-without-commission-payment.input';
import { PaymentScheduleUpsertWithoutCommissionPaymentInput } from './payment-schedule-upsert-without-commission-payment.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleUpdateWithoutCommissionPaymentInput } from './payment-schedule-update-without-commission-payment.input';
export declare class PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput {
    create?: PaymentScheduleCreateWithoutCommissionPaymentInput;
    connectOrCreate?: PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput;
    upsert?: PaymentScheduleUpsertWithoutCommissionPaymentInput;
    connect?: PaymentScheduleWhereUniqueInput;
    update?: PaymentScheduleUpdateWithoutCommissionPaymentInput;
}
