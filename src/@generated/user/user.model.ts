import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Employee } from '../employee/employee.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    lastLogin!: Date | null;

    @Field(() => String, {nullable:true})
    profilePicture!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Employee], {nullable:true})
    Employee?: Array<Employee>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
