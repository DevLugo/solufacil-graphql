import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SystemSectionCreateManyInput } from './system-section-create-many.input';

@ArgsType()
export class CreateManySystemSectionArgs {

    @Field(() => [SystemSectionCreateManyInput], {nullable:false})
    data!: Array<SystemSectionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
