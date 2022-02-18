import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutJefeInput } from './employee-create-without-jefe.input';
import { EmployeeCreateOrConnectWithoutJefeInput } from './employee-create-or-connect-without-jefe.input';
import { EmployeeCreateManyJefeInputEnvelope } from './employee-create-many-jefe-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedManyWithoutJefeInput {

    @Field(() => [EmployeeCreateWithoutJefeInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutJefeInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutJefeInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutJefeInput>;

    @Field(() => EmployeeCreateManyJefeInputEnvelope, {nullable:true})
    createMany?: EmployeeCreateManyJefeInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
}
