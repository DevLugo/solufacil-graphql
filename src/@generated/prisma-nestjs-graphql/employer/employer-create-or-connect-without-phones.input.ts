import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployerWhereUniqueInput } from './employer-where-unique.input';
import { EmployerCreateWithoutPhonesInput } from './employer-create-without-phones.input';

@InputType()
export class EmployerCreateOrConnectWithoutPhonesInput {

    @Field(() => EmployerWhereUniqueInput, {nullable:false})
    where!: EmployerWhereUniqueInput;

    @Field(() => EmployerCreateWithoutPhonesInput, {nullable:false})
    create!: EmployerCreateWithoutPhonesInput;
}
