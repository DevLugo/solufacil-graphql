import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneScalarWhereInput } from './phone-scalar-where.input';
import { PhoneUpdateManyMutationInput } from './phone-update-many-mutation.input';

@InputType()
export class PhoneUpdateManyWithWhereWithoutAvalInput {

    @Field(() => PhoneScalarWhereInput, {nullable:false})
    where!: PhoneScalarWhereInput;

    @Field(() => PhoneUpdateManyMutationInput, {nullable:false})
    data!: PhoneUpdateManyMutationInput;
}
