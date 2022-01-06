import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumLoanStateFieldUpdateOperationsInput } from '../prisma/enum-loan-state-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { LoanPaymentUpdateManyWithoutLoanInput } from '../loan-payment/loan-payment-update-many-without-loan.input';

@InputType()
export class LoanUpdateWithoutContractInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @HideField()
    status?: EnumLoanStateFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    amount?: DecimalFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => LoanPaymentUpdateManyWithoutLoanInput, {nullable:true})
    payments?: LoanPaymentUpdateManyWithoutLoanInput;
}
