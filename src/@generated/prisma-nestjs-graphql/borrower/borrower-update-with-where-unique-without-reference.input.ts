import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerUpdateWithoutReferenceInput } from './borrower-update-without-reference.input';

@InputType()
export class BorrowerUpdateWithWhereUniqueWithoutReferenceInput {

    @Field(() => BorrowerWhereUniqueInput, {nullable:false})
    where!: BorrowerWhereUniqueInput;

    @Field(() => BorrowerUpdateWithoutReferenceInput, {nullable:false})
    data!: BorrowerUpdateWithoutReferenceInput;
}
