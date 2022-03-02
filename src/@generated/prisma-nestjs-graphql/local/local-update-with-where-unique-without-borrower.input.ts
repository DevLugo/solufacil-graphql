import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocalWhereUniqueInput } from './local-where-unique.input';
import { LocalUpdateWithoutBorrowerInput } from './local-update-without-borrower.input';

@InputType()
export class LocalUpdateWithWhereUniqueWithoutBorrowerInput {

    @Field(() => LocalWhereUniqueInput, {nullable:false})
    where!: LocalWhereUniqueInput;

    @Field(() => LocalUpdateWithoutBorrowerInput, {nullable:false})
    data!: LocalUpdateWithoutBorrowerInput;
}
