import { ContractWhereInput } from './contract-where.input';
import { ContractOrderByWithAggregationInput } from './contract-order-by-with-aggregation.input';
import { ContractScalarFieldEnum } from './contract-scalar-field.enum';
import { ContractScalarWhereWithAggregatesInput } from './contract-scalar-where-with-aggregates.input';
import { ContractCountAggregateInput } from './contract-count-aggregate.input';
import { ContractMinAggregateInput } from './contract-min-aggregate.input';
import { ContractMaxAggregateInput } from './contract-max-aggregate.input';
export declare class ContractGroupByArgs {
    where?: ContractWhereInput;
    orderBy?: Array<ContractOrderByWithAggregationInput>;
    by: Array<keyof typeof ContractScalarFieldEnum>;
    having?: ContractScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContractCountAggregateInput;
    _min?: ContractMinAggregateInput;
    _max?: ContractMaxAggregateInput;
}
