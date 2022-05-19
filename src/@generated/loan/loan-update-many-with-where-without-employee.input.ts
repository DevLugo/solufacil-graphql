import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanScalarWhereInput } from './loan-scalar-where.input';
import { LoanUpdateManyMutationInput } from './loan-update-many-mutation.input';

@InputType()
export class LoanUpdateManyWithWhereWithoutEmployeeInput {

    @Field(() => LoanScalarWhereInput, {nullable:false})
    where!: LoanScalarWhereInput;

    @Field(() => LoanUpdateManyMutationInput, {nullable:false})
    data!: LoanUpdateManyMutationInput;
}
