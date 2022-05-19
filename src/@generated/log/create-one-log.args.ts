import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCreateInput } from './log-create.input';

@ArgsType()
export class CreateOneLogArgs {

    @Field(() => LogCreateInput, {nullable:false})
    data!: LogCreateInput;
}
