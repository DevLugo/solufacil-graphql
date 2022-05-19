import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AvalCountAggregate } from './aval-count-aggregate.output';
import { AvalMinAggregate } from './aval-min-aggregate.output';
import { AvalMaxAggregate } from './aval-max-aggregate.output';

@ObjectType()
export class AvalGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => AvalCountAggregate, {nullable:true})
    _count?: AvalCountAggregate;

    @Field(() => AvalMinAggregate, {nullable:true})
    _min?: AvalMinAggregate;

    @Field(() => AvalMaxAggregate, {nullable:true})
    _max?: AvalMaxAggregate;
}
