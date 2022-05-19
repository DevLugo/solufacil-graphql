import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerUpdateWithoutLocalInput } from './borrower-update-without-local.input';
import { BorrowerCreateWithoutLocalInput } from './borrower-create-without-local.input';

@InputType()
export class BorrowerUpsertWithoutLocalInput {

    @Field(() => BorrowerUpdateWithoutLocalInput, {nullable:false})
    update!: BorrowerUpdateWithoutLocalInput;

    @Field(() => BorrowerCreateWithoutLocalInput, {nullable:false})
    create!: BorrowerCreateWithoutLocalInput;
}
