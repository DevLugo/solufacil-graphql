import { ComissionPaymentConfigurationCreateNestedManyWithoutLoanTypeInput } from '../comission-payment-configuration/comission-payment-configuration-create-nested-many-without-loan-type.input';
export declare class LoantypeCreateWithoutLoanInput {
    id?: string;
    name: string;
    weekDuration: number;
    rate: number;
    overdueRate: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ComissionPaymentConfiguration?: ComissionPaymentConfigurationCreateNestedManyWithoutLoanTypeInput;
}
