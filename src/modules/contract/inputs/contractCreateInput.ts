import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ContractCreateInput {
    @Field(() => Date, {nullable:false})
    signDate!: Date | string;

    @Field(() => String, {nullable:false})
    borrowerId!: string;

    @Field(() => String, {nullable:true})
    employeeId!: string;

    @Field(() => String, {nullable:false})
    contractTypeId!: string
}
