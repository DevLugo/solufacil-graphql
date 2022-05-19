import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LogCountAggregate } from './log-count-aggregate.output';
import { LogMinAggregate } from './log-min-aggregate.output';
import { LogMaxAggregate } from './log-max-aggregate.output';

@ObjectType()
export class AggregateLog {

    @Field(() => LogCountAggregate, {nullable:true})
    _count?: LogCountAggregate;

    @Field(() => LogMinAggregate, {nullable:true})
    _min?: LogMinAggregate;

    @Field(() => LogMaxAggregate, {nullable:true})
    _max?: LogMaxAggregate;
}
