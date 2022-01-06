import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogScalarWhereInput } from './log-scalar-where.input';
import { LogUpdateManyMutationInput } from './log-update-many-mutation.input';

@InputType()
export class LogUpdateManyWithWhereWithoutSectionInput {

    @Field(() => LogScalarWhereInput, {nullable:false})
    where!: LogScalarWhereInput;

    @Field(() => LogUpdateManyMutationInput, {nullable:false})
    data!: LogUpdateManyMutationInput;
}
