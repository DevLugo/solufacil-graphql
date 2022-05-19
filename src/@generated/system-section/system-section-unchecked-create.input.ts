import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogUncheckedCreateNestedManyWithoutSectionInput } from '../log/log-unchecked-create-nested-many-without-section.input';

@InputType()
export class SystemSectionUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => LogUncheckedCreateNestedManyWithoutSectionInput, {nullable:true})
    logs?: LogUncheckedCreateNestedManyWithoutSectionInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
