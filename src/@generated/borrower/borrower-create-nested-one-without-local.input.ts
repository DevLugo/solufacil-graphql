import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerCreateWithoutLocalInput } from './borrower-create-without-local.input';
import { BorrowerCreateOrConnectWithoutLocalInput } from './borrower-create-or-connect-without-local.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';

@InputType()
export class BorrowerCreateNestedOneWithoutLocalInput {

    @Field(() => BorrowerCreateWithoutLocalInput, {nullable:true})
    create?: BorrowerCreateWithoutLocalInput;

    @Field(() => BorrowerCreateOrConnectWithoutLocalInput, {nullable:true})
    connectOrCreate?: BorrowerCreateOrConnectWithoutLocalInput;

    @Field(() => BorrowerWhereUniqueInput, {nullable:true})
    connect?: BorrowerWhereUniqueInput;
}
