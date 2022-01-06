import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SystemSectionCountAggregate } from './system-section-count-aggregate.output';
import { SystemSectionMinAggregate } from './system-section-min-aggregate.output';
import { SystemSectionMaxAggregate } from './system-section-max-aggregate.output';

@ObjectType()
export class AggregateSystemSection {

    @Field(() => SystemSectionCountAggregate, {nullable:true})
    _count?: SystemSectionCountAggregate;

    @Field(() => SystemSectionMinAggregate, {nullable:true})
    _min?: SystemSectionMinAggregate;

    @Field(() => SystemSectionMaxAggregate, {nullable:true})
    _max?: SystemSectionMaxAggregate;
}
