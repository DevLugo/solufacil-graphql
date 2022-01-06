import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SystemSectionUpdateInput } from './system-section-update.input';
import { SystemSectionWhereUniqueInput } from './system-section-where-unique.input';

@ArgsType()
export class UpdateOneSystemSectionArgs {

    @Field(() => SystemSectionUpdateInput, {nullable:false})
    data!: SystemSectionUpdateInput;

    @Field(() => SystemSectionWhereUniqueInput, {nullable:false})
    where!: SystemSectionWhereUniqueInput;
}
