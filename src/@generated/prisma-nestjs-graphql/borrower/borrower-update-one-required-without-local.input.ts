import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerCreateWithoutLocalInput } from './borrower-create-without-local.input';
import { BorrowerCreateOrConnectWithoutLocalInput } from './borrower-create-or-connect-without-local.input';
import { BorrowerUpsertWithoutLocalInput } from './borrower-upsert-without-local.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerUpdateWithoutLocalInput } from './borrower-update-without-local.input';

@InputType()
export class BorrowerUpdateOneRequiredWithoutLocalInput {

    @Field(() => BorrowerCreateWithoutLocalInput, {nullable:true})
    create?: BorrowerCreateWithoutLocalInput;

    @Field(() => BorrowerCreateOrConnectWithoutLocalInput, {nullable:true})
    connectOrCreate?: BorrowerCreateOrConnectWithoutLocalInput;

    @Field(() => BorrowerUpsertWithoutLocalInput, {nullable:true})
    upsert?: BorrowerUpsertWithoutLocalInput;

    @Field(() => BorrowerWhereUniqueInput, {nullable:true})
    connect?: BorrowerWhereUniqueInput;

    @Field(() => BorrowerUpdateWithoutLocalInput, {nullable:true})
    update?: BorrowerUpdateWithoutLocalInput;
}
