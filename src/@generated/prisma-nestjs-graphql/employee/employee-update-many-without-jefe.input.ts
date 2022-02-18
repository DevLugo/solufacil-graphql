import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutJefeInput } from './employee-create-without-jefe.input';
import { EmployeeCreateOrConnectWithoutJefeInput } from './employee-create-or-connect-without-jefe.input';
import { EmployeeUpsertWithWhereUniqueWithoutJefeInput } from './employee-upsert-with-where-unique-without-jefe.input';
import { EmployeeCreateManyJefeInputEnvelope } from './employee-create-many-jefe-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutJefeInput } from './employee-update-with-where-unique-without-jefe.input';
import { EmployeeUpdateManyWithWhereWithoutJefeInput } from './employee-update-many-with-where-without-jefe.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUpdateManyWithoutJefeInput {

    @Field(() => [EmployeeCreateWithoutJefeInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutJefeInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutJefeInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutJefeInput>;

    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutJefeInput], {nullable:true})
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutJefeInput>;

    @Field(() => EmployeeCreateManyJefeInputEnvelope, {nullable:true})
    createMany?: EmployeeCreateManyJefeInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutJefeInput], {nullable:true})
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutJefeInput>;

    @Field(() => [EmployeeUpdateManyWithWhereWithoutJefeInput], {nullable:true})
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutJefeInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeScalarWhereInput>;
}
