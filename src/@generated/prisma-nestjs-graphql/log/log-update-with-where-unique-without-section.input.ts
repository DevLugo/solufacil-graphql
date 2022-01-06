import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { LogUpdateWithoutSectionInput } from './log-update-without-section.input';

@InputType()
export class LogUpdateWithWhereUniqueWithoutSectionInput {

    @Field(() => LogWhereUniqueInput, {nullable:false})
    where!: LogWhereUniqueInput;

    @Field(() => LogUpdateWithoutSectionInput, {nullable:false})
    data!: LogUpdateWithoutSectionInput;
}
