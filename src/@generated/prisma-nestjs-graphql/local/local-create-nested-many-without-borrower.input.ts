import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocalCreateWithoutBorrowerInput } from './local-create-without-borrower.input';
import { LocalCreateOrConnectWithoutBorrowerInput } from './local-create-or-connect-without-borrower.input';
import { LocalCreateManyBorrowerInputEnvelope } from './local-create-many-borrower-input-envelope.input';
import { LocalWhereUniqueInput } from './local-where-unique.input';

@InputType()
export class LocalCreateNestedManyWithoutBorrowerInput {

    @Field(() => [LocalCreateWithoutBorrowerInput], {nullable:true})
    create?: Array<LocalCreateWithoutBorrowerInput>;

    @Field(() => [LocalCreateOrConnectWithoutBorrowerInput], {nullable:true})
    connectOrCreate?: Array<LocalCreateOrConnectWithoutBorrowerInput>;

    @Field(() => LocalCreateManyBorrowerInputEnvelope, {nullable:true})
    createMany?: LocalCreateManyBorrowerInputEnvelope;

    @Field(() => [LocalWhereUniqueInput], {nullable:true})
    connect?: Array<LocalWhereUniqueInput>;
}
