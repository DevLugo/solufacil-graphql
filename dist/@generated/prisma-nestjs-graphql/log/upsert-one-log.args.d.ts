import { LogWhereUniqueInput } from './log-where-unique.input';
import { LogCreateInput } from './log-create.input';
import { LogUpdateInput } from './log-update.input';
export declare class UpsertOneLogArgs {
    where: LogWhereUniqueInput;
    create: LogCreateInput;
    update: LogUpdateInput;
}
