import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Phone } from '../phone/phone.model';
import { Document } from '../document/document.model';
import { Contract } from '../contract/contract.model';
import { BorrowerCount } from './borrower-count.output';

@ObjectType()
export class Borrower {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => [Phone], {nullable:true})
    phones?: Array<Phone>;

    @Field(() => [Document], {nullable:true})
    documents?: Array<Document>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Contract], {nullable:true})
    Contract?: Array<Contract>;

    @Field(() => BorrowerCount, {nullable:false})
    _count?: BorrowerCount;
}
