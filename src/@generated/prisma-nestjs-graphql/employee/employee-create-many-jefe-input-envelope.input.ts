import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateManyJefeInput } from './employee-create-many-jefe.input';

@InputType()
export class EmployeeCreateManyJefeInputEnvelope {

    @Field(() => [EmployeeCreateManyJefeInput], {nullable:false})
    data!: Array<EmployeeCreateManyJefeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
