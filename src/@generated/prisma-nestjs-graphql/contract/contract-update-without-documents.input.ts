import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { BorrowerUpdateOneRequiredWithoutContractInput } from '../borrower/borrower-update-one-required-without-contract.input';
import { EmployeeUpdateOneWithoutContractsInput } from '../employee/employee-update-one-without-contracts.input';
import { LoanUpdateManyWithoutContractInput } from '../loan/loan-update-many-without-contract.input';
import { ContractTypeUpdateOneRequiredWithoutContractInput } from '../contract-type/contract-type-update-one-required-without-contract.input';

@InputType()
export class ContractUpdateWithoutDocumentsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dueDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    signDate?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BorrowerUpdateOneRequiredWithoutContractInput, {nullable:true})
    borrower?: BorrowerUpdateOneRequiredWithoutContractInput;

    @Field(() => EmployeeUpdateOneWithoutContractsInput, {nullable:true})
    employee?: EmployeeUpdateOneWithoutContractsInput;

    @HideField()
    loans?: LoanUpdateManyWithoutContractInput;

    @Field(() => ContractTypeUpdateOneRequiredWithoutContractInput, {nullable:true})
    contractType?: ContractTypeUpdateOneRequiredWithoutContractInput;
}
