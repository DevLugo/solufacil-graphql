import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateManyUserInput } from './employee-create-many-user.input';

@InputType()
export class EmployeeCreateManyUserInputEnvelope {

    @Field(() => [EmployeeCreateManyUserInput], {nullable:false})
    data!: Array<EmployeeCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
