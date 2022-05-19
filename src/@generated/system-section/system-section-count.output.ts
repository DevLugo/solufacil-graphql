import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SystemSectionCount {

    @Field(() => Int, {nullable:false})
    logs?: number;
}
