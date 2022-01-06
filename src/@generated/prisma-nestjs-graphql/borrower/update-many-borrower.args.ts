import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BorrowerUpdateManyMutationInput } from './borrower-update-many-mutation.input';
import { BorrowerWhereInput } from './borrower-where.input';

@ArgsType()
export class UpdateManyBorrowerArgs {

    @Field(() => BorrowerUpdateManyMutationInput, {nullable:false})
    data!: BorrowerUpdateManyMutationInput;

    @Field(() => BorrowerWhereInput, {nullable:true})
    where?: BorrowerWhereInput;
}
