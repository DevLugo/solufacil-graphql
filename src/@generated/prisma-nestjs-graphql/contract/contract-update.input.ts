import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { Prisma } from '@prisma/client';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { BorrowerUpdateOneWithoutContractInput } from '../borrower/borrower-update-one-without-contract.input';
import { EmployeeUpdateOneWithoutContractInput } from '../employee/employee-update-one-without-contract.input';
import { DocumentUpdateManyWithoutContractInput } from '../document/document-update-many-without-contract.input';
import { LoanUpdateManyWithoutContractInput } from '../loan/loan-update-many-without-contract.input';

@InputType()
export class ContractUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    amount?: Prisma.Decimal;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BorrowerUpdateOneWithoutContractInput, {nullable:true})
    Borrower?: BorrowerUpdateOneWithoutContractInput;

    @Field(() => EmployeeUpdateOneWithoutContractInput, {nullable:true})
    Employee?: EmployeeUpdateOneWithoutContractInput;

    @Field(() => DocumentUpdateManyWithoutContractInput, {nullable:true})
    Documents?: DocumentUpdateManyWithoutContractInput;

    @Field(() => LoanUpdateManyWithoutContractInput, {nullable:true})
    Loans?: LoanUpdateManyWithoutContractInput;
}
