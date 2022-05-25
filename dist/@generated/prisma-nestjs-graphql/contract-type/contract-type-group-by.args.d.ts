import { ContractTypeWhereInput } from './contract-type-where.input';
import { ContractTypeOrderByWithAggregationInput } from './contract-type-order-by-with-aggregation.input';
import { ContractTypeScalarFieldEnum } from './contract-type-scalar-field.enum';
import { ContractTypeScalarWhereWithAggregatesInput } from './contract-type-scalar-where-with-aggregates.input';
import { ContractTypeCountAggregateInput } from './contract-type-count-aggregate.input';
import { ContractTypeAvgAggregateInput } from './contract-type-avg-aggregate.input';
import { ContractTypeSumAggregateInput } from './contract-type-sum-aggregate.input';
import { ContractTypeMinAggregateInput } from './contract-type-min-aggregate.input';
import { ContractTypeMaxAggregateInput } from './contract-type-max-aggregate.input';
export declare class ContractTypeGroupByArgs {
    where?: ContractTypeWhereInput;
    orderBy?: Array<ContractTypeOrderByWithAggregationInput>;
    by: Array<keyof typeof ContractTypeScalarFieldEnum>;
    having?: ContractTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContractTypeCountAggregateInput;
    _avg?: ContractTypeAvgAggregateInput;
    _sum?: ContractTypeSumAggregateInput;
    _min?: ContractTypeMinAggregateInput;
    _max?: ContractTypeMaxAggregateInput;
}
