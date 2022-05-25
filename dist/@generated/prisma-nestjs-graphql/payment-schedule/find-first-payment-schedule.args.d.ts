import { PaymentScheduleWhereInput } from './payment-schedule-where.input';
import { PaymentScheduleOrderByWithRelationInput } from './payment-schedule-order-by-with-relation.input';
import { PaymentScheduleWhereUniqueInput } from './payment-schedule-where-unique.input';
import { PaymentScheduleScalarFieldEnum } from './payment-schedule-scalar-field.enum';
export declare class FindFirstPaymentScheduleArgs {
    where?: PaymentScheduleWhereInput;
    orderBy?: Array<PaymentScheduleOrderByWithRelationInput>;
    cursor?: PaymentScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PaymentScheduleScalarFieldEnum>;
}
