import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { BorrowerCreateNestedOneWithoutLocalInput } from '../borrower/borrower-create-nested-one-without-local.input';

@InputType()
export class LocalCreateInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => BorrowerCreateNestedOneWithoutLocalInput, {nullable:false})
    borrower!: BorrowerCreateNestedOneWithoutLocalInput;
}
