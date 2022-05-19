import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumLoanStateFieldUpdateOperationsInput } from '../prisma/enum-loan-state-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { LoanPaymentUpdateManyWithoutLoanInput } from '../loan-payment/loan-payment-update-many-without-loan.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { LoantypeUpdateOneRequiredWithoutLoanInput } from '../loantype/loantype-update-one-required-without-loan.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EmployeeUpdateOneRequiredWithoutLoanInput } from '../employee/employee-update-one-required-without-loan.input';
import { PaymentScheduleUpdateManyWithoutLoanInput } from '../payment-schedule/payment-schedule-update-many-without-loan.input';
import { CommissionPaymentUpdateManyWithoutLoanInput } from '../commission-payment/commission-payment-update-many-without-loan.input';

@InputType()
export class LoanUpdateWithoutContractInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @HideField()
    status?: EnumLoanStateFieldUpdateOperationsInput;

    @HideField()
    payments?: LoanPaymentUpdateManyWithoutLoanInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    weeklyPaymentAmount?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    amountToPay?: DecimalFieldUpdateOperationsInput;

    @Field(() => LoantypeUpdateOneRequiredWithoutLoanInput, {nullable:true})
    loanType?: LoantypeUpdateOneRequiredWithoutLoanInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    signDate?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EmployeeUpdateOneRequiredWithoutLoanInput, {nullable:true})
    employee?: EmployeeUpdateOneRequiredWithoutLoanInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PaymentScheduleUpdateManyWithoutLoanInput, {nullable:true})
    paymentSchedule?: PaymentScheduleUpdateManyWithoutLoanInput;

    @Field(() => CommissionPaymentUpdateManyWithoutLoanInput, {nullable:true})
    CommissionPayment?: CommissionPaymentUpdateManyWithoutLoanInput;
}
