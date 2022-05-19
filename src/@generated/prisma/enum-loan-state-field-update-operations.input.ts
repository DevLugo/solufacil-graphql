import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanState } from './loan-state.enum';

@InputType()
export class EnumLoanStateFieldUpdateOperationsInput {

    @Field(() => LoanState, {nullable:true})
    set?: keyof typeof LoanState;
}
