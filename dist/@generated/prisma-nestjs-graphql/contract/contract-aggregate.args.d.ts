import { ContractWhereInput } from './contract-where.input';
import { ContractOrderByWithRelationInput } from './contract-order-by-with-relation.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractCountAggregateInput } from './contract-count-aggregate.input';
import { ContractMinAggregateInput } from './contract-min-aggregate.input';
import { ContractMaxAggregateInput } from './contract-max-aggregate.input';
export declare class ContractAggregateArgs {
    where?: ContractWhereInput;
    orderBy?: Array<ContractOrderByWithRelationInput>;
    cursor?: ContractWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: ContractCountAggregateInput;
    _min?: ContractMinAggregateInput;
    _max?: ContractMaxAggregateInput;
}
