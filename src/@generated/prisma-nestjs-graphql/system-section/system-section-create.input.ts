import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCreateNestedManyWithoutSectionInput } from '../log/log-create-nested-many-without-section.input';

@InputType()
export class SystemSectionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => LogCreateNestedManyWithoutSectionInput, {nullable:true})
    logs?: LogCreateNestedManyWithoutSectionInput;
}
