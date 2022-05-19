import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogUpdateInput } from './log-update.input';
import { LogWhereUniqueInput } from './log-where-unique.input';

@ArgsType()
export class UpdateOneLogArgs {

    @Field(() => LogUpdateInput, {nullable:false})
    data!: LogUpdateInput;

    @Field(() => LogWhereUniqueInput, {nullable:false})
    where!: LogWhereUniqueInput;
}
