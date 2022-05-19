import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BorrowerUpdateOneRequiredWithoutContractInput } from '../borrower/borrower-update-one-required-without-contract.input';
import { LoanUpdateManyWithoutContractInput } from '../loan/loan-update-many-without-contract.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ContractTypeUpdateOneRequiredWithoutContractInput } from '../contract-type/contract-type-update-one-required-without-contract.input';
import { EmployeeUpdateOneWithoutContractLoanLeadInput } from '../employee/employee-update-one-without-contract-loan-lead.input';
import { EmployeeUpdateOneRequiredWithoutContractEmployeeInput } from '../employee/employee-update-one-required-without-contract-employee.input';

@InputType()
export class ContractUpdateWithoutDocumentsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => BorrowerUpdateOneRequiredWithoutContractInput, {nullable:true})
    borrower?: BorrowerUpdateOneRequiredWithoutContractInput;

    @HideField()
    loans?: LoanUpdateManyWithoutContractInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dueDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    signDate?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ContractTypeUpdateOneRequiredWithoutContractInput, {nullable:true})
    contractType?: ContractTypeUpdateOneRequiredWithoutContractInput;

    @Field(() => EmployeeUpdateOneWithoutContractLoanLeadInput, {nullable:true})
    loanLead?: EmployeeUpdateOneWithoutContractLoanLeadInput;

    @Field(() => EmployeeUpdateOneRequiredWithoutContractEmployeeInput, {nullable:true})
    employee?: EmployeeUpdateOneRequiredWithoutContractEmployeeInput;
}
