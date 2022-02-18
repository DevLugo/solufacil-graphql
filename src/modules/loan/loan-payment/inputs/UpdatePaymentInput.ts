import { Field, InputType } from "@nestjs/graphql";
import { GraphQLDecimal } from "prisma-graphql-type-decimal";
import { DateTimeFieldUpdateOperationsInput } from "../../../../@generated/prisma-nestjs-graphql/prisma/date-time-field-update-operations.input";
import { DecimalFieldUpdateOperationsInput } from "../../../../@generated/prisma-nestjs-graphql/prisma/decimal-field-update-operations.input";
import { NullableStringFieldUpdateOperationsInput } from "../../../../@generated/prisma-nestjs-graphql/prisma/nullable-string-field-update-operations.input";

@InputType()
export class LoanPaymentUpdateInput {

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: any;

    @Field(() => Date, {nullable:false})
    paidDate!: Date | string

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    details?: NullableStringFieldUpdateOperationsInput;

    @Field()
    employeeId: string;
    
    @Field()
    loanId: string;
}
