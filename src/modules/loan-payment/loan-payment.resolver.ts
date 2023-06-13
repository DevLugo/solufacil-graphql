import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { LoanPayment } from './types';
import { PrismaService } from '../../core/prisma/prisma.service';
import { Comment } from '../comment/type';

@Resolver(LoanPayment)
export class LoanPaymentResolver {

    constructor(
        private readonly _db: PrismaService,
    ) {}

    @ResolveField(() => [Comment])
    async comments(@Parent() root: LoanPayment) {
        return await this._db.comment.findMany({
            where:{
                loanPaymentId: root.id
            }
        });
    }
}
