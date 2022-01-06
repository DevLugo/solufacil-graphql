import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { LogCreateWithoutSectionInput } from './log-create-without-section.input';

@InputType()
export class LogCreateOrConnectWithoutSectionInput {

    @Field(() => LogWhereUniqueInput, {nullable:false})
    where!: LogWhereUniqueInput;

    @Field(() => LogCreateWithoutSectionInput, {nullable:false})
    create!: LogCreateWithoutSectionInput;
}
