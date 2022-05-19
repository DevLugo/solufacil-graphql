import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { EnumCommissionPaymentStatusFieldUpdateOperationsInput } from '../prisma/enum-commission-payment-status-field-update-operations.input';

@InputType()
export class CommissionPaymentUncheckedUpdateWithoutLoanInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    amount?: DecimalFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    paymentScheduleId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    employeeId?: StringFieldUpdateOperationsInput;

    @Field(() => EnumCommissionPaymentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumCommissionPaymentStatusFieldUpdateOperationsInput;
}
