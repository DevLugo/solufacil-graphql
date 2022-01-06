import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { LogCreateInput } from './log-create.input';
import { LogUpdateInput } from './log-update.input';

@ArgsType()
export class UpsertOneLogArgs {

    @Field(() => LogWhereUniqueInput, {nullable:false})
    where!: LogWhereUniqueInput;

    @Field(() => LogCreateInput, {nullable:false})
    create!: LogCreateInput;

    @Field(() => LogUpdateInput, {nullable:false})
    update!: LogUpdateInput;
}
