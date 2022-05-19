import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AvalCountAggregate } from './aval-count-aggregate.output';
import { AvalMinAggregate } from './aval-min-aggregate.output';
import { AvalMaxAggregate } from './aval-max-aggregate.output';

@ObjectType()
export class AggregateAval {

    @Field(() => AvalCountAggregate, {nullable:true})
    _count?: AvalCountAggregate;

    @Field(() => AvalMinAggregate, {nullable:true})
    _min?: AvalMinAggregate;

    @Field(() => AvalMaxAggregate, {nullable:true})
    _max?: AvalMaxAggregate;
}
