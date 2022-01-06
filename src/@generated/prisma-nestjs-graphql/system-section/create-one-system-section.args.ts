import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SystemSectionCreateInput } from './system-section-create.input';

@ArgsType()
export class CreateOneSystemSectionArgs {

    @Field(() => SystemSectionCreateInput, {nullable:false})
    data!: SystemSectionCreateInput;
}
