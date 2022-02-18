import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerCreateWithoutReferenceInput } from './borrower-create-without-reference.input';
import { BorrowerCreateOrConnectWithoutReferenceInput } from './borrower-create-or-connect-without-reference.input';
import { BorrowerCreateManyReferenceInputEnvelope } from './borrower-create-many-reference-input-envelope.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';

@InputType()
export class BorrowerUncheckedCreateNestedManyWithoutReferenceInput {

    @Field(() => [BorrowerCreateWithoutReferenceInput], {nullable:true})
    create?: Array<BorrowerCreateWithoutReferenceInput>;

    @Field(() => [BorrowerCreateOrConnectWithoutReferenceInput], {nullable:true})
    connectOrCreate?: Array<BorrowerCreateOrConnectWithoutReferenceInput>;

    @Field(() => BorrowerCreateManyReferenceInputEnvelope, {nullable:true})
    createMany?: BorrowerCreateManyReferenceInputEnvelope;

    @Field(() => [BorrowerWhereUniqueInput], {nullable:true})
    connect?: Array<BorrowerWhereUniqueInput>;
}
