import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocalWhereUniqueInput } from './local-where-unique.input';
import { LocalCreateWithoutBorrowerInput } from './local-create-without-borrower.input';

@InputType()
export class LocalCreateOrConnectWithoutBorrowerInput {

    @Field(() => LocalWhereUniqueInput, {nullable:false})
    where!: LocalWhereUniqueInput;

    @Field(() => LocalCreateWithoutBorrowerInput, {nullable:false})
    create!: LocalCreateWithoutBorrowerInput;
}
