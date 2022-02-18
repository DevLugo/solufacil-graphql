import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanCreateManyEmployeeInput } from './loan-create-many-employee.input';

@InputType()
export class LoanCreateManyEmployeeInputEnvelope {

    @Field(() => [LoanCreateManyEmployeeInput], {nullable:false})
    data!: Array<LoanCreateManyEmployeeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
