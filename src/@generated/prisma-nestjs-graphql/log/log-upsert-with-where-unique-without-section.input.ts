import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { LogUpdateWithoutSectionInput } from './log-update-without-section.input';
import { LogCreateWithoutSectionInput } from './log-create-without-section.input';

@InputType()
export class LogUpsertWithWhereUniqueWithoutSectionInput {

    @Field(() => LogWhereUniqueInput, {nullable:false})
    where!: LogWhereUniqueInput;

    @Field(() => LogUpdateWithoutSectionInput, {nullable:false})
    update!: LogUpdateWithoutSectionInput;

    @Field(() => LogCreateWithoutSectionInput, {nullable:false})
    create!: LogCreateWithoutSectionInput;
}
