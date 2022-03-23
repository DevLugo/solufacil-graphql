import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { LoanUpdateOneRequiredWithoutPaymentsInput } from '../loan/loan-update-one-required-without-payments.input';
import { EmployeeUpdateOneRequiredWithoutLoanPaymentInput } from '../employee/employee-update-one-required-without-loan-payment.input';

@InputType()
export class LoanPaymentUpdateWithoutPaymentScheduleInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    amount?: DecimalFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    comments?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => LoanUpdateOneRequiredWithoutPaymentsInput, {nullable:true})
    loan?: LoanUpdateOneRequiredWithoutPaymentsInput;

    @Field(() => EmployeeUpdateOneRequiredWithoutLoanPaymentInput, {nullable:true})
    employee?: EmployeeUpdateOneRequiredWithoutLoanPaymentInput;
}