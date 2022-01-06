import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCreateWithoutSectionInput } from './log-create-without-section.input';
import { LogCreateOrConnectWithoutSectionInput } from './log-create-or-connect-without-section.input';
import { LogUpsertWithWhereUniqueWithoutSectionInput } from './log-upsert-with-where-unique-without-section.input';
import { LogCreateManySectionInputEnvelope } from './log-create-many-section-input-envelope.input';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { LogUpdateWithWhereUniqueWithoutSectionInput } from './log-update-with-where-unique-without-section.input';
import { LogUpdateManyWithWhereWithoutSectionInput } from './log-update-many-with-where-without-section.input';
import { LogScalarWhereInput } from './log-scalar-where.input';

@InputType()
export class LogUpdateManyWithoutSectionInput {

    @Field(() => [LogCreateWithoutSectionInput], {nullable:true})
    create?: Array<LogCreateWithoutSectionInput>;

    @Field(() => [LogCreateOrConnectWithoutSectionInput], {nullable:true})
    connectOrCreate?: Array<LogCreateOrConnectWithoutSectionInput>;

    @Field(() => [LogUpsertWithWhereUniqueWithoutSectionInput], {nullable:true})
    upsert?: Array<LogUpsertWithWhereUniqueWithoutSectionInput>;

    @Field(() => LogCreateManySectionInputEnvelope, {nullable:true})
    createMany?: LogCreateManySectionInputEnvelope;

    @Field(() => [LogWhereUniqueInput], {nullable:true})
    set?: Array<LogWhereUniqueInput>;

    @Field(() => [LogWhereUniqueInput], {nullable:true})
    disconnect?: Array<LogWhereUniqueInput>;

    @Field(() => [LogWhereUniqueInput], {nullable:true})
    delete?: Array<LogWhereUniqueInput>;

    @Field(() => [LogWhereUniqueInput], {nullable:true})
    connect?: Array<LogWhereUniqueInput>;

    @Field(() => [LogUpdateWithWhereUniqueWithoutSectionInput], {nullable:true})
    update?: Array<LogUpdateWithWhereUniqueWithoutSectionInput>;

    @Field(() => [LogUpdateManyWithWhereWithoutSectionInput], {nullable:true})
    updateMany?: Array<LogUpdateManyWithWhereWithoutSectionInput>;

    @Field(() => [LogScalarWhereInput], {nullable:true})
    deleteMany?: Array<LogScalarWhereInput>;
}
