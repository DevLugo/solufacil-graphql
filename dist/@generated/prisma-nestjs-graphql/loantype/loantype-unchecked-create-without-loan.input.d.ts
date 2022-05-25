import { ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput } from '../comission-payment-configuration/comission-payment-configuration-unchecked-create-nested-many-without-loan-type.input';
export declare class LoantypeUncheckedCreateWithoutLoanInput {
    id?: string;
    name: string;
    weekDuration: number;
    rate: number;
    overdueRate: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ComissionPaymentConfiguration?: ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput;
}
