import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionGoalType } from './commission-goal-type.enum';

@InputType()
export class EnumCommissionGoalTypeFieldUpdateOperationsInput {

    @Field(() => CommissionGoalType, {nullable:true})
    set?: keyof typeof CommissionGoalType;
}
