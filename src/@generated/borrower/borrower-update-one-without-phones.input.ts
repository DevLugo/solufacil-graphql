import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerCreateWithoutPhonesInput } from './borrower-create-without-phones.input';
import { BorrowerCreateOrConnectWithoutPhonesInput } from './borrower-create-or-connect-without-phones.input';
import { BorrowerUpsertWithoutPhonesInput } from './borrower-upsert-without-phones.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerUpdateWithoutPhonesInput } from './borrower-update-without-phones.input';

@InputType()
export class BorrowerUpdateOneWithoutPhonesInput {

    @Field(() => BorrowerCreateWithoutPhonesInput, {nullable:true})
    create?: BorrowerCreateWithoutPhonesInput;

    @Field(() => BorrowerCreateOrConnectWithoutPhonesInput, {nullable:true})
    connectOrCreate?: BorrowerCreateOrConnectWithoutPhonesInput;

    @Field(() => BorrowerUpsertWithoutPhonesInput, {nullable:true})
    upsert?: BorrowerUpsertWithoutPhonesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => BorrowerWhereUniqueInput, {nullable:true})
    connect?: BorrowerWhereUniqueInput;

    @Field(() => BorrowerUpdateWithoutPhonesInput, {nullable:true})
    update?: BorrowerUpdateWithoutPhonesInput;
}
