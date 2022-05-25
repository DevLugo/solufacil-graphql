import { LogCreateNestedManyWithoutSectionInput } from '../log/log-create-nested-many-without-section.input';
export declare class SystemSectionCreateInput {
    id?: string;
    name: string;
    logs?: LogCreateNestedManyWithoutSectionInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
