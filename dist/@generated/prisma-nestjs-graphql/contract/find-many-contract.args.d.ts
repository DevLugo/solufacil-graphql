import { ContractWhereInput } from './contract-where.input';
import { ContractOrderByWithRelationInput } from './contract-order-by-with-relation.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractScalarFieldEnum } from './contract-scalar-field.enum';
export declare class FindManyContractArgs {
    where?: ContractWhereInput;
    orderBy?: Array<ContractOrderByWithRelationInput>;
    cursor?: ContractWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ContractScalarFieldEnum>;
}
