import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeesTypes } from './employees-types.enum';

@InputType()
export class EnumEmployeesTypesFieldUpdateOperationsInput {

    @Field(() => EmployeesTypes, {nullable:true})
    set?: keyof typeof EmployeesTypes;
}
