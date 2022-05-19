import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PhoneCountAggregate } from './phone-count-aggregate.output';
import { PhoneMinAggregate } from './phone-min-aggregate.output';
import { PhoneMaxAggregate } from './phone-max-aggregate.output';

@ObjectType()
export class AggregatePhone {

    @Field(() => PhoneCountAggregate, {nullable:true})
    _count?: PhoneCountAggregate;

    @Field(() => PhoneMinAggregate, {nullable:true})
    _min?: PhoneMinAggregate;

    @Field(() => PhoneMaxAggregate, {nullable:true})
    _max?: PhoneMaxAggregate;
}
