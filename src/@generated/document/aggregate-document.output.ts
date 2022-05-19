import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DocumentCountAggregate } from './document-count-aggregate.output';
import { DocumentMinAggregate } from './document-min-aggregate.output';
import { DocumentMaxAggregate } from './document-max-aggregate.output';

@ObjectType()
export class AggregateDocument {

    @Field(() => DocumentCountAggregate, {nullable:true})
    _count?: DocumentCountAggregate;

    @Field(() => DocumentMinAggregate, {nullable:true})
    _min?: DocumentMinAggregate;

    @Field(() => DocumentMaxAggregate, {nullable:true})
    _max?: DocumentMaxAggregate;
}
