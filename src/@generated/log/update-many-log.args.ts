import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogUpdateManyMutationInput } from './log-update-many-mutation.input';
import { LogWhereInput } from './log-where.input';

@ArgsType()
export class UpdateManyLogArgs {

    @Field(() => LogUpdateManyMutationInput, {nullable:false})
    data!: LogUpdateManyMutationInput;

    @Field(() => LogWhereInput, {nullable:true})
    where?: LogWhereInput;
}
