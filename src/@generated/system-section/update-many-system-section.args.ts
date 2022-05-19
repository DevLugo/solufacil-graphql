import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SystemSectionUpdateManyMutationInput } from './system-section-update-many-mutation.input';
import { SystemSectionWhereInput } from './system-section-where.input';

@ArgsType()
export class UpdateManySystemSectionArgs {

    @Field(() => SystemSectionUpdateManyMutationInput, {nullable:false})
    data!: SystemSectionUpdateManyMutationInput;

    @Field(() => SystemSectionWhereInput, {nullable:true})
    where?: SystemSectionWhereInput;
}
