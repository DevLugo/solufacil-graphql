import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCreateWithoutSectionInput } from './log-create-without-section.input';
import { LogCreateOrConnectWithoutSectionInput } from './log-create-or-connect-without-section.input';
import { LogCreateManySectionInputEnvelope } from './log-create-many-section-input-envelope.input';
import { LogWhereUniqueInput } from './log-where-unique.input';

@InputType()
export class LogCreateNestedManyWithoutSectionInput {

    @Field(() => [LogCreateWithoutSectionInput], {nullable:true})
    create?: Array<LogCreateWithoutSectionInput>;

    @Field(() => [LogCreateOrConnectWithoutSectionInput], {nullable:true})
    connectOrCreate?: Array<LogCreateOrConnectWithoutSectionInput>;

    @Field(() => LogCreateManySectionInputEnvelope, {nullable:true})
    createMany?: LogCreateManySectionInputEnvelope;

    @Field(() => [LogWhereUniqueInput], {nullable:true})
    connect?: Array<LogWhereUniqueInput>;
}
