import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployerCreateWithoutDocumentsInput } from './employer-create-without-documents.input';
import { EmployerCreateOrConnectWithoutDocumentsInput } from './employer-create-or-connect-without-documents.input';
import { EmployerUpsertWithoutDocumentsInput } from './employer-upsert-without-documents.input';
import { EmployerWhereUniqueInput } from './employer-where-unique.input';
import { EmployerUpdateWithoutDocumentsInput } from './employer-update-without-documents.input';

@InputType()
export class EmployerUpdateOneWithoutDocumentsInput {

    @Field(() => EmployerCreateWithoutDocumentsInput, {nullable:true})
    create?: EmployerCreateWithoutDocumentsInput;

    @Field(() => EmployerCreateOrConnectWithoutDocumentsInput, {nullable:true})
    connectOrCreate?: EmployerCreateOrConnectWithoutDocumentsInput;

    @Field(() => EmployerUpsertWithoutDocumentsInput, {nullable:true})
    upsert?: EmployerUpsertWithoutDocumentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => EmployerWhereUniqueInput, {nullable:true})
    connect?: EmployerWhereUniqueInput;

    @Field(() => EmployerUpdateWithoutDocumentsInput, {nullable:true})
    update?: EmployerUpdateWithoutDocumentsInput;
}
