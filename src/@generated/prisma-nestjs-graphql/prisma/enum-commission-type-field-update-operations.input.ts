import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionType } from './commission-type.enum';

@InputType()
export class EnumCommissionTypeFieldUpdateOperationsInput {

    @Field(() => CommissionType, {nullable:true})
    set?: keyof typeof CommissionType;
}
