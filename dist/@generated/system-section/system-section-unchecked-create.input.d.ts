import { LogUncheckedCreateNestedManyWithoutSectionInput } from '../log/log-unchecked-create-nested-many-without-section.input';
export declare class SystemSectionUncheckedCreateInput {
    id?: string;
    name: string;
    logs?: LogUncheckedCreateNestedManyWithoutSectionInput;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
