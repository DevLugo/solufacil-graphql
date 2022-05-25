import { Decimal } from '@prisma/client/runtime';
export declare class ContractTypeCreateManyInput {
    id?: string;
    name: string;
    monthDuration: number;
    amount: Decimal;
    maxRate: Decimal;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
