import { ContractTypeWhereInput } from './contract-type-where.input';
import { ContractTypeOrderByWithRelationInput } from './contract-type-order-by-with-relation.input';
import { ContractTypeWhereUniqueInput } from './contract-type-where-unique.input';
import { ContractTypeScalarFieldEnum } from './contract-type-scalar-field.enum';
export declare class FindManyContractTypeArgs {
    where?: ContractTypeWhereInput;
    orderBy?: Array<ContractTypeOrderByWithRelationInput>;
    cursor?: ContractTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof ContractTypeScalarFieldEnum>;
}
