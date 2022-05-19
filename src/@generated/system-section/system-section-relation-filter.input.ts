import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemSectionWhereInput } from './system-section-where.input';

@InputType()
export class SystemSectionRelationFilter {

    @Field(() => SystemSectionWhereInput, {nullable:true})
    is?: SystemSectionWhereInput;

    @Field(() => SystemSectionWhereInput, {nullable:true})
    isNot?: SystemSectionWhereInput;
}
