import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerScalarWhereInput } from './borrower-scalar-where.input';
import { BorrowerUpdateManyMutationInput } from './borrower-update-many-mutation.input';

@InputType()
export class BorrowerUpdateManyWithWhereWithoutReferenceInput {

    @Field(() => BorrowerScalarWhereInput, {nullable:false})
    where!: BorrowerScalarWhereInput;

    @Field(() => BorrowerUpdateManyMutationInput, {nullable:false})
    data!: BorrowerUpdateManyMutationInput;
}
