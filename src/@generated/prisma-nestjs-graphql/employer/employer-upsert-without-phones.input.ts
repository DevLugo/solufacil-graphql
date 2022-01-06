import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployerUpdateWithoutPhonesInput } from './employer-update-without-phones.input';
import { EmployerCreateWithoutPhonesInput } from './employer-create-without-phones.input';

@InputType()
export class EmployerUpsertWithoutPhonesInput {

    @Field(() => EmployerUpdateWithoutPhonesInput, {nullable:false})
    update!: EmployerUpdateWithoutPhonesInput;

    @Field(() => EmployerCreateWithoutPhonesInput, {nullable:false})
    create!: EmployerCreateWithoutPhonesInput;
}
