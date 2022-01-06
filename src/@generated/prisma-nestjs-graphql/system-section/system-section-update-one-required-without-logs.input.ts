import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemSectionCreateWithoutLogsInput } from './system-section-create-without-logs.input';
import { SystemSectionCreateOrConnectWithoutLogsInput } from './system-section-create-or-connect-without-logs.input';
import { SystemSectionUpsertWithoutLogsInput } from './system-section-upsert-without-logs.input';
import { SystemSectionWhereUniqueInput } from './system-section-where-unique.input';
import { SystemSectionUpdateWithoutLogsInput } from './system-section-update-without-logs.input';

@InputType()
export class SystemSectionUpdateOneRequiredWithoutLogsInput {

    @Field(() => SystemSectionCreateWithoutLogsInput, {nullable:true})
    create?: SystemSectionCreateWithoutLogsInput;

    @Field(() => SystemSectionCreateOrConnectWithoutLogsInput, {nullable:true})
    connectOrCreate?: SystemSectionCreateOrConnectWithoutLogsInput;

    @Field(() => SystemSectionUpsertWithoutLogsInput, {nullable:true})
    upsert?: SystemSectionUpsertWithoutLogsInput;

    @Field(() => SystemSectionWhereUniqueInput, {nullable:true})
    connect?: SystemSectionWhereUniqueInput;

    @Field(() => SystemSectionUpdateWithoutLogsInput, {nullable:true})
    update?: SystemSectionUpdateWithoutLogsInput;
}
