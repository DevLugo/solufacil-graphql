import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmployerCountAggregate } from './employer-count-aggregate.output';
import { EmployerMinAggregate } from './employer-min-aggregate.output';
import { EmployerMaxAggregate } from './employer-max-aggregate.output';

@ObjectType()
export class AggregateEmployer {

    @Field(() => EmployerCountAggregate, {nullable:true})
    _count?: EmployerCountAggregate;

    @Field(() => EmployerMinAggregate, {nullable:true})
    _min?: EmployerMinAggregate;

    @Field(() => EmployerMaxAggregate, {nullable:true})
    _max?: EmployerMaxAggregate;
}
