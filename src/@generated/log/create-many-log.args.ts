import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCreateManyInput } from './log-create-many.input';

@ArgsType()
export class CreateManyLogArgs {

    @Field(() => [LogCreateManyInput], {nullable:false})
    data!: Array<LogCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
