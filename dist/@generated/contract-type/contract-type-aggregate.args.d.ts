import { ContractTypeWhereInput } from './contract-type-where.input';
import { ContractTypeOrderByWithRelationInput } from './contract-type-order-by-with-relation.input';
import { ContractTypeWhereUniqueInput } from './contract-type-where-unique.input';
import { ContractTypeCountAggregateInput } from './contract-type-count-aggregate.input';
import { ContractTypeAvgAggregateInput } from './contract-type-avg-aggregate.input';
import { ContractTypeSumAggregateInput } from './contract-type-sum-aggregate.input';
import { ContractTypeMinAggregateInput } from './contract-type-min-aggregate.input';
import { ContractTypeMaxAggregateInput } from './contract-type-max-aggregate.input';
export declare class ContractTypeAggregateArgs {
    where?: ContractTypeWhereInput;
    orderBy?: Array<ContractTypeOrderByWithRelationInput>;
    cursor?: ContractTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: ContractTypeCountAggregateInput;
    _avg?: ContractTypeAvgAggregateInput;
    _sum?: ContractTypeSumAggregateInput;
    _min?: ContractTypeMinAggregateInput;
    _max?: ContractTypeMaxAggregateInput;
}
