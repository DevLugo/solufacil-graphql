import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SystemSectionWhereUniqueInput } from './system-section-where-unique.input';
import { SystemSectionCreateInput } from './system-section-create.input';
import { SystemSectionUpdateInput } from './system-section-update.input';

@ArgsType()
export class UpsertOneSystemSectionArgs {

    @Field(() => SystemSectionWhereUniqueInput, {nullable:false})
    where!: SystemSectionWhereUniqueInput;

    @Field(() => SystemSectionCreateInput, {nullable:false})
    create!: SystemSectionCreateInput;

    @Field(() => SystemSectionUpdateInput, {nullable:false})
    update!: SystemSectionUpdateInput;
}
