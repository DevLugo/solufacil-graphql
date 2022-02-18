import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerCreateWithoutReferenceInput } from './borrower-create-without-reference.input';
import { BorrowerCreateOrConnectWithoutReferenceInput } from './borrower-create-or-connect-without-reference.input';
import { BorrowerUpsertWithWhereUniqueWithoutReferenceInput } from './borrower-upsert-with-where-unique-without-reference.input';
import { BorrowerCreateManyReferenceInputEnvelope } from './borrower-create-many-reference-input-envelope.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerUpdateWithWhereUniqueWithoutReferenceInput } from './borrower-update-with-where-unique-without-reference.input';
import { BorrowerUpdateManyWithWhereWithoutReferenceInput } from './borrower-update-many-with-where-without-reference.input';
import { BorrowerScalarWhereInput } from './borrower-scalar-where.input';

@InputType()
export class BorrowerUpdateManyWithoutReferenceInput {

    @Field(() => [BorrowerCreateWithoutReferenceInput], {nullable:true})
    create?: Array<BorrowerCreateWithoutReferenceInput>;

    @Field(() => [BorrowerCreateOrConnectWithoutReferenceInput], {nullable:true})
    connectOrCreate?: Array<BorrowerCreateOrConnectWithoutReferenceInput>;

    @Field(() => [BorrowerUpsertWithWhereUniqueWithoutReferenceInput], {nullable:true})
    upsert?: Array<BorrowerUpsertWithWhereUniqueWithoutReferenceInput>;

    @Field(() => BorrowerCreateManyReferenceInputEnvelope, {nullable:true})
    createMany?: BorrowerCreateManyReferenceInputEnvelope;

    @Field(() => [BorrowerWhereUniqueInput], {nullable:true})
    set?: Array<BorrowerWhereUniqueInput>;

    @Field(() => [BorrowerWhereUniqueInput], {nullable:true})
    disconnect?: Array<BorrowerWhereUniqueInput>;

    @Field(() => [BorrowerWhereUniqueInput], {nullable:true})
    delete?: Array<BorrowerWhereUniqueInput>;

    @Field(() => [BorrowerWhereUniqueInput], {nullable:true})
    connect?: Array<BorrowerWhereUniqueInput>;

    @Field(() => [BorrowerUpdateWithWhereUniqueWithoutReferenceInput], {nullable:true})
    update?: Array<BorrowerUpdateWithWhereUniqueWithoutReferenceInput>;

    @Field(() => [BorrowerUpdateManyWithWhereWithoutReferenceInput], {nullable:true})
    updateMany?: Array<BorrowerUpdateManyWithWhereWithoutReferenceInput>;

    @Field(() => [BorrowerScalarWhereInput], {nullable:true})
    deleteMany?: Array<BorrowerScalarWhereInput>;
}
