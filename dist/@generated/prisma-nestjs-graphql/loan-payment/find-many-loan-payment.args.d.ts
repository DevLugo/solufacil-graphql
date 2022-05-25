import { LoanPaymentWhereInput } from './loan-payment-where.input';
import { LoanPaymentOrderByWithRelationInput } from './loan-payment-order-by-with-relation.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { LoanPaymentScalarFieldEnum } from './loan-payment-scalar-field.enum';
export declare class FindManyLoanPaymentArgs {
    where?: LoanPaymentWhereInput;
    orderBy?: Array<LoanPaymentOrderByWithRelationInput>;
    cursor?: LoanPaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof LoanPaymentScalarFieldEnum>;
}
