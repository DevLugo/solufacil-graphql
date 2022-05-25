import { Decimal } from '@prisma/client/runtime';
import { Contract } from '../contract/contract.model';
import { ContractTypeCount } from './contract-type-count.output';
export declare class ContractType {
    id: string;
    name: string;
    monthDuration: number;
    amount: Decimal;
    maxRate: Decimal;
    createdAt: Date;
    updatedAt: Date | null;
    contract?: Array<Contract>;
    _count?: ContractTypeCount;
}
