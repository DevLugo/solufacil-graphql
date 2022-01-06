import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SystemSectionWhereUniqueInput } from './system-section-where-unique.input';

@ArgsType()
export class DeleteOneSystemSectionArgs {

    @Field(() => SystemSectionWhereUniqueInput, {nullable:false})
    where!: SystemSectionWhereUniqueInput;
}
