import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumLoanStateFieldUpdateOperationsInput } from '../prisma/enum-loan-state-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { LoanPaymentUpdateManyWithoutLoanInput } from '../loan-payment/loan-payment-update-many-without-loan.input';
import { ContractUpdateOneWithoutLoansInput } from '../contract/contract-update-one-without-loans.input';

@InputType()
export class LoanUpdateInput {

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

    @Field(() => ContractUpdateOneWithoutLoansInput, {nullable:true})
    Contract?: ContractUpdateOneWithoutLoansInput;
}
