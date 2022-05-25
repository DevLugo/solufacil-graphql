import { DocumentType } from '../prisma/document-type.enum';
import { DocumentCountAggregate } from './document-count-aggregate.output';
import { DocumentMinAggregate } from './document-min-aggregate.output';
import { DocumentMaxAggregate } from './document-max-aggregate.output';
export declare class DocumentGroupBy {
    id: string;
    type: keyof typeof DocumentType;
    borrowerId?: string;
    avalId?: string;
    contractId?: string;
    employeeId?: string;
    _count?: DocumentCountAggregate;
    _min?: DocumentMinAggregate;
    _max?: DocumentMaxAggregate;
}
