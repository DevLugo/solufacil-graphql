import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneCreateManyEmployeeInput } from './phone-create-many-employee.input';

@InputType()
export class PhoneCreateManyEmployeeInputEnvelope {

    @Field(() => [PhoneCreateManyEmployeeInput], {nullable:false})
    data!: Array<PhoneCreateManyEmployeeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
