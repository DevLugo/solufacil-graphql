import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { SystemSection } from '../system-section/system-section.model';

@ObjectType()
export class Log {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => SystemSection, {nullable:false})
    section?: SystemSection;

    @Field(() => String, {nullable:false})
    requestBody!: string;

    @Field(() => String, {nullable:false})
    requestType!: string;

    @Field(() => String, {nullable:false})
    deviceType!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    systemSectionId!: string;
}
