import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCreateManySectionInput } from './log-create-many-section.input';

@InputType()
export class LogCreateManySectionInputEnvelope {

    @Field(() => [LogCreateManySectionInput], {nullable:false})
    data!: Array<LogCreateManySectionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
