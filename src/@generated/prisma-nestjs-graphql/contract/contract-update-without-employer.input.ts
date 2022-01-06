import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BorrowerUpdateOneWithoutContractInput } from '../borrower/borrower-update-one-without-contract.input';
import { DocumentUpdateManyWithoutContractInput } from '../document/document-update-many-without-contract.input';
import { LoanUpdateManyWithoutContractInput } from '../loan/loan-update-many-without-contract.input';

@InputType()
export class ContractUpdateWithoutEmployerInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    amount?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BorrowerUpdateOneWithoutContractInput, {nullable:true})
    Borrower?: BorrowerUpdateOneWithoutContractInput;

    @Field(() => DocumentUpdateManyWithoutContractInput, {nullable:true})
    Documents?: DocumentUpdateManyWithoutContractInput;

    @Field(() => LoanUpdateManyWithoutContractInput, {nullable:true})
    Loans?: LoanUpdateManyWithoutContractInput;
}
