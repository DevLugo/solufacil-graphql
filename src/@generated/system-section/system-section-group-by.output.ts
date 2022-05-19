import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SystemSectionCountAggregate } from './system-section-count-aggregate.output';
import { SystemSectionMinAggregate } from './system-section-min-aggregate.output';
import { SystemSectionMaxAggregate } from './system-section-max-aggregate.output';

@ObjectType()
export class SystemSectionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => SystemSectionCountAggregate, {nullable:true})
    _count?: SystemSectionCountAggregate;

    @Field(() => SystemSectionMinAggregate, {nullable:true})
    _min?: SystemSectionMinAggregate;

    @Field(() => SystemSectionMaxAggregate, {nullable:true})
    _max?: SystemSectionMaxAggregate;
}
