import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BorrowerCountAggregate } from './borrower-count-aggregate.output';
import { BorrowerMinAggregate } from './borrower-min-aggregate.output';
import { BorrowerMaxAggregate } from './borrower-max-aggregate.output';

@ObjectType()
export class BorrowerGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => BorrowerCountAggregate, {nullable:true})
    _count?: BorrowerCountAggregate;

    @Field(() => BorrowerMinAggregate, {nullable:true})
    _min?: BorrowerMinAggregate;

    @Field(() => BorrowerMaxAggregate, {nullable:true})
    _max?: BorrowerMaxAggregate;
}
