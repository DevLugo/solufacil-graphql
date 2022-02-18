import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumEmployeesTypesFieldUpdateOperationsInput } from '../prisma/enum-employees-types-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { PhoneUpdateManyWithoutEmployeeInput } from '../phone/phone-update-many-without-employee.input';
import { UserUpdateOneRequiredWithoutEmployeeInput } from '../user/user-update-one-required-without-employee.input';
import { ContractUpdateManyWithoutEmployeeInput } from '../contract/contract-update-many-without-employee.input';
import { LoanUpdateManyWithoutEmployeeInput } from '../loan/loan-update-many-without-employee.input';
import { LoanPaymentUpdateManyWithoutEmployeeInput } from '../loan-payment/loan-payment-update-many-without-employee.input';

@InputType()
export class EmployeeUpdateWithoutDocumentsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumEmployeesTypesFieldUpdateOperationsInput, {nullable:true})
    type?: EnumEmployeesTypesFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PhoneUpdateManyWithoutEmployeeInput, {nullable:true})
    phones?: PhoneUpdateManyWithoutEmployeeInput;

    @Field(() => UserUpdateOneRequiredWithoutEmployeeInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutEmployeeInput;

    @Field(() => ContractUpdateManyWithoutEmployeeInput, {nullable:true})
    contracts?: ContractUpdateManyWithoutEmployeeInput;

    @Field(() => LoanUpdateManyWithoutEmployeeInput, {nullable:true})
    loan?: LoanUpdateManyWithoutEmployeeInput;

    @Field(() => LoanPaymentUpdateManyWithoutEmployeeInput, {nullable:true})
    loanPayment?: LoanPaymentUpdateManyWithoutEmployeeInput;
}
