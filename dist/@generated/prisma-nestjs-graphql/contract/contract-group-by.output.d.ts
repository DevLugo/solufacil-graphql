import { ContractCountAggregate } from './contract-count-aggregate.output';
import { ContractMinAggregate } from './contract-min-aggregate.output';
import { ContractMaxAggregate } from './contract-max-aggregate.output';
export declare class ContractGroupBy {
    id: string;
    borrowerId: string;
    createdAt: Date | string;
    dueDate: Date | string;
    signDate: Date | string;
    updatedAt: Date | string;
    contractTypeId: string;
    loanLeadId: string;
    employeeId: string;
    _count?: ContractCountAggregate;
    _min?: ContractMinAggregate;
    _max?: ContractMaxAggregate;
}
