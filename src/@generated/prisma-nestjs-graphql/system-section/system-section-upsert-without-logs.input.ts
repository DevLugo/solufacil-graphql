import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemSectionUpdateWithoutLogsInput } from './system-section-update-without-logs.input';
import { SystemSectionCreateWithoutLogsInput } from './system-section-create-without-logs.input';

@InputType()
export class SystemSectionUpsertWithoutLogsInput {

    @Field(() => SystemSectionUpdateWithoutLogsInput, {nullable:false})
    update!: SystemSectionUpdateWithoutLogsInput;

    @Field(() => SystemSectionCreateWithoutLogsInput, {nullable:false})
    create!: SystemSectionCreateWithoutLogsInput;
}
