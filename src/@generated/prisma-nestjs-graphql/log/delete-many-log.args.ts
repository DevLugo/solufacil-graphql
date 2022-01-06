import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogWhereInput } from './log-where.input';

@ArgsType()
export class DeleteManyLogArgs {

    @Field(() => LogWhereInput, {nullable:true})
    where?: LogWhereInput;
}
