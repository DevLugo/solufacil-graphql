import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutUserInput } from './employee-create-without-user.input';
import { EmployeeCreateOrConnectWithoutUserInput } from './employee-create-or-connect-without-user.input';
import { EmployeeCreateManyUserInputEnvelope } from './employee-create-many-user-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [EmployeeCreateWithoutUserInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutUserInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutUserInput>;

    @Field(() => EmployeeCreateManyUserInputEnvelope, {nullable:true})
    createMany?: EmployeeCreateManyUserInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
}
