import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SystemSectionWhereInput } from './system-section-where.input';

@ArgsType()
export class DeleteManySystemSectionArgs {

    @Field(() => SystemSectionWhereInput, {nullable:true})
    where?: SystemSectionWhereInput;
}
