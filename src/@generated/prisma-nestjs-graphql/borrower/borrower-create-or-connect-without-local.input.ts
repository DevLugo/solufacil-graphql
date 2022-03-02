import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerCreateWithoutLocalInput } from './borrower-create-without-local.input';

@InputType()
export class BorrowerCreateOrConnectWithoutLocalInput {

    @Field(() => BorrowerWhereUniqueInput, {nullable:false})
    where!: BorrowerWhereUniqueInput;

    @Field(() => BorrowerCreateWithoutLocalInput, {nullable:false})
    create!: BorrowerCreateWithoutLocalInput;
}
