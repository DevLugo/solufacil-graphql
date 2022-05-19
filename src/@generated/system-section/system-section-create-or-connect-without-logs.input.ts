import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemSectionWhereUniqueInput } from './system-section-where-unique.input';
import { SystemSectionCreateWithoutLogsInput } from './system-section-create-without-logs.input';

@InputType()
export class SystemSectionCreateOrConnectWithoutLogsInput {

    @Field(() => SystemSectionWhereUniqueInput, {nullable:false})
    where!: SystemSectionWhereUniqueInput;

    @Field(() => SystemSectionCreateWithoutLogsInput, {nullable:false})
    create!: SystemSectionCreateWithoutLogsInput;
}
