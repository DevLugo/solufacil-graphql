import { ContractTypeCountAggregate } from './contract-type-count-aggregate.output';
import { ContractTypeAvgAggregate } from './contract-type-avg-aggregate.output';
import { ContractTypeSumAggregate } from './contract-type-sum-aggregate.output';
import { ContractTypeMinAggregate } from './contract-type-min-aggregate.output';
import { ContractTypeMaxAggregate } from './contract-type-max-aggregate.output';
export declare class AggregateContractType {
    _count?: ContractTypeCountAggregate;
    _avg?: ContractTypeAvgAggregate;
    _sum?: ContractTypeSumAggregate;
    _min?: ContractTypeMinAggregate;
    _max?: ContractTypeMaxAggregate;
}
