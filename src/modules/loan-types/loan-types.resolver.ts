import { Args, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../core/prisma/prisma.service';
import { LoanType, LoanTypeWhereInput } from './types';

@Resolver(LoanType)
export class LoanTypesResolver {
    constructor(
        private readonly _db: PrismaService
    ) {}
    
   
    @Query(() => [LoanType])
    async getLoanTypes(
        @Args('where', {nullable:true}) where: LoanTypeWhereInput,
    ) {
        return this._db.loantype.findMany({
            where: {}
        });
    }
}
