import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocalScalarWhereInput } from './local-scalar-where.input';
import { LocalUpdateManyMutationInput } from './local-update-many-mutation.input';

@InputType()
export class LocalUpdateManyWithWhereWithoutBorrowerInput {

    @Field(() => LocalScalarWhereInput, {nullable:false})
    where!: LocalScalarWhereInput;

    @Field(() => LocalUpdateManyMutationInput, {nullable:false})
    data!: LocalUpdateManyMutationInput;
}
