import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BorrowerCountAggregate } from './borrower-count-aggregate.output';
import { BorrowerMinAggregate } from './borrower-min-aggregate.output';
import { BorrowerMaxAggregate } from './borrower-max-aggregate.output';

@ObjectType()
export class AggregateBorrower {

    @Field(() => BorrowerCountAggregate, {nullable:true})
    _count?: BorrowerCountAggregate;

    @Field(() => BorrowerMinAggregate, {nullable:true})
    _min?: BorrowerMinAggregate;

    @Field(() => BorrowerMaxAggregate, {nullable:true})
    _max?: BorrowerMaxAggregate;
}
