import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Log } from '../log/log.model';
import { SystemSectionCount } from './system-section-count.output';

@ObjectType()
export class SystemSection {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Log], {nullable:true})
    logs?: Array<Log>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => SystemSectionCount, {nullable:false})
    _count?: SystemSectionCount;
}
