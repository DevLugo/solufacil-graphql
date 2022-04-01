import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RangeDaysInput {
    @Field(() => Date, {nullable:false})
    dateStart!: Date | string;

    @Field(() => Date, {nullable:false})
    dateEnd!: Date | string;
}
