import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerCreateWithoutBorrowerInput } from './borrower-create-without-borrower.input';
import { BorrowerCreateOrConnectWithoutBorrowerInput } from './borrower-create-or-connect-without-borrower.input';
import { BorrowerUpsertWithoutBorrowerInput } from './borrower-upsert-without-borrower.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerUpdateWithoutBorrowerInput } from './borrower-update-without-borrower.input';

@InputType()
export class BorrowerUpdateOneWithoutBorrowerInput {

    @Field(() => BorrowerCreateWithoutBorrowerInput, {nullable:true})
    create?: BorrowerCreateWithoutBorrowerInput;

    @Field(() => BorrowerCreateOrConnectWithoutBorrowerInput, {nullable:true})
    connectOrCreate?: BorrowerCreateOrConnectWithoutBorrowerInput;

    @Field(() => BorrowerUpsertWithoutBorrowerInput, {nullable:true})
    upsert?: BorrowerUpsertWithoutBorrowerInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => BorrowerWhereUniqueInput, {nullable:true})
    connect?: BorrowerWhereUniqueInput;

    @Field(() => BorrowerUpdateWithoutBorrowerInput, {nullable:true})
    update?: BorrowerUpdateWithoutBorrowerInput;
}
