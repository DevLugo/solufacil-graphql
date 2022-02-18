import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerUpdateWithoutReferenceInput } from './borrower-update-without-reference.input';
import { BorrowerCreateWithoutReferenceInput } from './borrower-create-without-reference.input';

@InputType()
export class BorrowerUpsertWithWhereUniqueWithoutReferenceInput {

    @Field(() => BorrowerWhereUniqueInput, {nullable:false})
    where!: BorrowerWhereUniqueInput;

    @Field(() => BorrowerUpdateWithoutReferenceInput, {nullable:false})
    update!: BorrowerUpdateWithoutReferenceInput;

    @Field(() => BorrowerCreateWithoutReferenceInput, {nullable:false})
    create!: BorrowerCreateWithoutReferenceInput;
}
