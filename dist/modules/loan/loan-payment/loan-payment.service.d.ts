import { LoanPaymentWhereInput } from '../../../@generated/loan-payment/loan-payment-where.input';
import { LoanPaymentCreateInput } from '../../../@generated/loan-payment/loan-payment-create.input';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { LoanPaymentUpdateInput } from './inputs/UpdatePaymentInput';
import { UtilsService } from '../utils.service';
export declare class LoanPaymentService {
    private readonly UtilsService;
    private readonly db;
    constructor(UtilsService: UtilsService, db: PrismaService);
    getMany(where: LoanPaymentWhereInput): Promise<import(".prisma/client").LoanPayment[]>;
    create(data: LoanPaymentCreateInput): Promise<import(".prisma/client").LoanPayment>;
    addPaymentToLoan(data: LoanPaymentUpdateInput): Promise<void>;
    getTotalPaidAmount(loanId: string): Promise<0 | import("@prisma/client/runtime").Decimal>;
    gePayments(loanId: string): Promise<import(".prisma/client").LoanPayment[]>;
    createPayment(data: LoanPaymentCreateInput): Promise<import(".prisma/client").LoanPayment>;
}
