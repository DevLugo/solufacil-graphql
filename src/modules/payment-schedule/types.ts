import { Field, ID, InputType, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { PaymentState } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { GraphQLDecimal } from "prisma-graphql-type-decimal";

registerEnumType(PaymentState, {
    name: 'PaymentState',
})

@ObjectType()
export class PaymentSchedule {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    numeration!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    amountToPay!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    paidAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    returnToCapital!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    profit!: Decimal;

    @Field(() => PaymentState, {nullable:false})
    status!: keyof typeof PaymentState;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    delayed!: boolean;

    @Field(() => Date, {nullable:false})
    dueDate!: Date;

    @Field(() => String, {nullable:true})
    details!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    loanId!: string;
}


@InputType()
export class PaymentScheduleWhereInput {
    @Field(() => String, {nullable:true})
    leadId?: string;

    @Field(() => Date, {nullable:true})
    dueDate?: Date;

    @Field(() => [PaymentState], {nullable:true})
    paymentState?: (keyof typeof PaymentState)[];

}
