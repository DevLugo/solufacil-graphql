import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LocalCountAggregate } from './local-count-aggregate.output';
import { LocalMinAggregate } from './local-min-aggregate.output';
import { LocalMaxAggregate } from './local-max-aggregate.output';

@ObjectType()
export class AggregateLocal {

    @Field(() => LocalCountAggregate, {nullable:true})
    _count?: LocalCountAggregate;

    @Field(() => LocalMinAggregate, {nullable:true})
    _min?: LocalMinAggregate;

    @Field(() => LocalMaxAggregate, {nullable:true})
    _max?: LocalMaxAggregate;
}
