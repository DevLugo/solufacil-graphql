import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemSectionCreateWithoutLogsInput } from './system-section-create-without-logs.input';
import { SystemSectionCreateOrConnectWithoutLogsInput } from './system-section-create-or-connect-without-logs.input';
import { SystemSectionWhereUniqueInput } from './system-section-where-unique.input';

@InputType()
export class SystemSectionCreateNestedOneWithoutLogsInput {

    @Field(() => SystemSectionCreateWithoutLogsInput, {nullable:true})
    create?: SystemSectionCreateWithoutLogsInput;

    @Field(() => SystemSectionCreateOrConnectWithoutLogsInput, {nullable:true})
    connectOrCreate?: SystemSectionCreateOrConnectWithoutLogsInput;

    @Field(() => SystemSectionWhereUniqueInput, {nullable:true})
    connect?: SystemSectionWhereUniqueInput;
}
