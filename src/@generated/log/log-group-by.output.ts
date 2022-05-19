import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LogCountAggregate } from './log-count-aggregate.output';
import { LogMinAggregate } from './log-min-aggregate.output';
import { LogMaxAggregate } from './log-max-aggregate.output';

@ObjectType()
export class LogGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    requestBody!: string;

    @Field(() => String, {nullable:false})
    requestType!: string;

    @Field(() => String, {nullable:false})
    deviceType!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    systemSectionId!: string;

    @Field(() => LogCountAggregate, {nullable:true})
    _count?: LogCountAggregate;

    @Field(() => LogMinAggregate, {nullable:true})
    _min?: LogMinAggregate;

    @Field(() => LogMaxAggregate, {nullable:true})
    _max?: LogMaxAggregate;
}
