import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumCommissionPaymentStatusFieldUpdateOperationsInput } from '../prisma/enum-commission-payment-status-field-update-operations.input';

@InputType()
export class CommissionPaymentUncheckedUpdateWithoutPaymentScheduleInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    amount?: DecimalFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    loanId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    employeeId?: StringFieldUpdateOperationsInput;

    @Field(() => EnumCommissionPaymentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumCommissionPaymentStatusFieldUpdateOperationsInput;
}
