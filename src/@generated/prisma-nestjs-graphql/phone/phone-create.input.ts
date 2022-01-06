import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerCreateNestedOneWithoutPhonesInput } from '../borrower/borrower-create-nested-one-without-phones.input';
import { EmployeeCreateNestedOneWithoutPhonesInput } from '../employee/employee-create-nested-one-without-phones.input';
import { AvalCreateNestedOneWithoutPhonesInput } from '../aval/aval-create-nested-one-without-phones.input';

@InputType()
export class PhoneCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    number!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BorrowerCreateNestedOneWithoutPhonesInput, {nullable:true})
    Borrower?: BorrowerCreateNestedOneWithoutPhonesInput;

    @Field(() => EmployeeCreateNestedOneWithoutPhonesInput, {nullable:true})
    Employee?: EmployeeCreateNestedOneWithoutPhonesInput;

    @Field(() => AvalCreateNestedOneWithoutPhonesInput, {nullable:true})
    aval?: AvalCreateNestedOneWithoutPhonesInput;
}
