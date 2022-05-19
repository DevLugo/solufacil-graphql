import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { BorrowerCreateNestedOneWithoutPhonesInput } from '../borrower/borrower-create-nested-one-without-phones.input';
import { EmployeeCreateNestedOneWithoutPhonesInput } from '../employee/employee-create-nested-one-without-phones.input';
import { AvalCreateNestedOneWithoutPhonesInput } from '../aval/aval-create-nested-one-without-phones.input';

@InputType()
export class PhoneCreateInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    number!: string;

    @Field(() => BorrowerCreateNestedOneWithoutPhonesInput, {nullable:true})
    Borrower?: BorrowerCreateNestedOneWithoutPhonesInput;

    @HideField()
    Employee?: EmployeeCreateNestedOneWithoutPhonesInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => AvalCreateNestedOneWithoutPhonesInput, {nullable:true})
    aval?: AvalCreateNestedOneWithoutPhonesInput;
}