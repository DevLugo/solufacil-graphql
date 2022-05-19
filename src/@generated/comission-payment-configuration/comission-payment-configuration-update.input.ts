import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumEmployeesTypesFieldUpdateOperationsInput } from '../prisma/enum-employees-types-field-update-operations.input';
import { LoantypeUpdateOneRequiredWithoutComissionPaymentConfigurationInput } from '../loantype/loantype-update-one-required-without-comission-payment-configuration.input';
import { EnumCommissionGoalTypeFieldUpdateOperationsInput } from '../prisma/enum-commission-goal-type-field-update-operations.input';
import { EnumCommissionTypeFieldUpdateOperationsInput } from '../prisma/enum-commission-type-field-update-operations.input';

@InputType()
export class ComissionPaymentConfigurationUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumEmployeesTypesFieldUpdateOperationsInput, {nullable:true})
    employeeType?: EnumEmployeesTypesFieldUpdateOperationsInput;

    @Field(() => LoantypeUpdateOneRequiredWithoutComissionPaymentConfigurationInput, {nullable:true})
    loanType?: LoantypeUpdateOneRequiredWithoutComissionPaymentConfigurationInput;

    @Field(() => EnumCommissionGoalTypeFieldUpdateOperationsInput, {nullable:true})
    commissionGoalType?: EnumCommissionGoalTypeFieldUpdateOperationsInput;

    @Field(() => EnumCommissionTypeFieldUpdateOperationsInput, {nullable:true})
    commissionType?: EnumCommissionTypeFieldUpdateOperationsInput;
}
