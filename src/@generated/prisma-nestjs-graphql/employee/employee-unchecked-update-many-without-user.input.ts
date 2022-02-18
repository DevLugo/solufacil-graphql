import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutUserInput } from './employee-create-without-user.input';
import { EmployeeCreateOrConnectWithoutUserInput } from './employee-create-or-connect-without-user.input';
import { EmployeeUpsertWithWhereUniqueWithoutUserInput } from './employee-upsert-with-where-unique-without-user.input';
import { EmployeeCreateManyUserInputEnvelope } from './employee-create-many-user-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutUserInput } from './employee-update-with-where-unique-without-user.input';
import { EmployeeUpdateManyWithWhereWithoutUserInput } from './employee-update-many-with-where-without-user.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUncheckedUpdateManyWithoutUserInput {

    @Field(() => [EmployeeCreateWithoutUserInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutUserInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutUserInput>;

    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => EmployeeCreateManyUserInputEnvelope, {nullable:true})
    createMany?: EmployeeCreateManyUserInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [EmployeeUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeScalarWhereInput>;
}
