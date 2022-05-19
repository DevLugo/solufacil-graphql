import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemSectionCreateNestedOneWithoutLogsInput } from '../system-section/system-section-create-nested-one-without-logs.input';

@InputType()
export class LogCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => SystemSectionCreateNestedOneWithoutLogsInput, {nullable:false})
    section!: SystemSectionCreateNestedOneWithoutLogsInput;

    @Field(() => String, {nullable:false})
    requestBody!: string;

    @Field(() => String, {nullable:false})
    requestType!: string;

    @Field(() => String, {nullable:false})
    deviceType!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
