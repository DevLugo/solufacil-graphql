import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Contract {
    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => ID, {nullable:false})
    borrowerId!: string;

    @Field(() => ID, {nullable:false})
    contractTypeId!: string;

    @Field(() => ID, {nullable:false})
    loanLeadId!: string;

    @Field(() => ID, {nullable:false})
    grantorId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    signDate!: Date | string;
}


@InputType()
export class ContractCreateInput {
    @Field(() => String, {nullable:false})
    borrowerId!: string;

    @Field(() => Date, {nullable:false})
    signDate!: Date | string;

    @Field(() => String, {nullable:false})
    contractTypeId!: string;

    @Field(() => String, {nullable:false})
    loanLeadId: string;

    @Field(() => String, {nullable:false})
    grantorId: string;
}