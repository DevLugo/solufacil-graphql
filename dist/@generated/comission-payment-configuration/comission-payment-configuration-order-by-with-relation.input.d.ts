import { SortOrder } from '../prisma/sort-order.enum';
import { LoantypeOrderByWithRelationInput } from '../loantype/loantype-order-by-with-relation.input';
export declare class ComissionPaymentConfigurationOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    employeeType?: keyof typeof SortOrder;
    loanType?: LoantypeOrderByWithRelationInput;
    loantypeId?: keyof typeof SortOrder;
    commissionGoalType?: keyof typeof SortOrder;
    commissionType?: keyof typeof SortOrder;
}
