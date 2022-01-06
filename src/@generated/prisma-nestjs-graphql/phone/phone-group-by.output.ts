import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PhoneCountAggregate } from './phone-count-aggregate.output';
import { PhoneMinAggregate } from './phone-min-aggregate.output';
import { PhoneMaxAggregate } from './phone-max-aggregate.output';

@ObjectType()
export class PhoneGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    number!: string;

    @Field(() => String, {nullable:true})
    borrowerId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    avalId?: string;

    @Field(() => String, {nullable:true})
    employeeId?: string;

    @Field(() => PhoneCountAggregate, {nullable:true})
    _count?: PhoneCountAggregate;

    @Field(() => PhoneMinAggregate, {nullable:true})
    _min?: PhoneMinAggregate;

    @Field(() => PhoneMaxAggregate, {nullable:true})
    _max?: PhoneMaxAggregate;
}
