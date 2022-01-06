import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerCreateWithoutPhonesInput } from './borrower-create-without-phones.input';
import { BorrowerCreateOrConnectWithoutPhonesInput } from './borrower-create-or-connect-without-phones.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';

@InputType()
export class BorrowerCreateNestedOneWithoutPhonesInput {

    @Field(() => BorrowerCreateWithoutPhonesInput, {nullable:true})
    create?: BorrowerCreateWithoutPhonesInput;

    @Field(() => BorrowerCreateOrConnectWithoutPhonesInput, {nullable:true})
    connectOrCreate?: BorrowerCreateOrConnectWithoutPhonesInput;

    @Field(() => BorrowerWhereUniqueInput, {nullable:true})
    connect?: BorrowerWhereUniqueInput;
}
