import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Phone } from '../phone/phone.model';
import { Document } from '../document/document.model';
import { AvalCount } from './aval-count.output';

@ObjectType()
export class Aval {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => [Phone], {nullable:true})
    phones?: Array<Phone>;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => [Document], {nullable:true})
    documents?: Array<Document>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => AvalCount, {nullable:false})
    _count?: AvalCount;
}
