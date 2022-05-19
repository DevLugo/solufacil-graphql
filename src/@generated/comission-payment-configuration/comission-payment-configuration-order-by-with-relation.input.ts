import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LoantypeOrderByWithRelationInput } from '../loantype/loantype-order-by-with-relation.input';

@InputType()
export class ComissionPaymentConfigurationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeType?: keyof typeof SortOrder;

    @Field(() => LoantypeOrderByWithRelationInput, {nullable:true})
    loanType?: LoantypeOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    loantypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    commissionGoalType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    commissionType?: keyof typeof SortOrder;
}
