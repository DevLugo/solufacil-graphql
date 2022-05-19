import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogWhereUniqueInput } from './log-where-unique.input';

@ArgsType()
export class FindUniqueLogArgs {

    @Field(() => LogWhereUniqueInput, {nullable:false})
    where!: LogWhereUniqueInput;
}
