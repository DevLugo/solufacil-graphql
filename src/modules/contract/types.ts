import { Field } from "@nestjs/graphql";

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