import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocalWhereUniqueInput } from './local-where-unique.input';
import { LocalUpdateWithoutBorrowerInput } from './local-update-without-borrower.input';
import { LocalCreateWithoutBorrowerInput } from './local-create-without-borrower.input';

@InputType()
export class LocalUpsertWithWhereUniqueWithoutBorrowerInput {

    @Field(() => LocalWhereUniqueInput, {nullable:false})
    where!: LocalWhereUniqueInput;

    @Field(() => LocalUpdateWithoutBorrowerInput, {nullable:false})
    update!: LocalUpdateWithoutBorrowerInput;

    @Field(() => LocalCreateWithoutBorrowerInput, {nullable:false})
    create!: LocalCreateWithoutBorrowerInput;
}
