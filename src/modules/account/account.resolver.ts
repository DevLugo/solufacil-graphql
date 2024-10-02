import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../core/prisma/prisma.service';
import { Account } from './types';
import { GqlAuthGuard } from '../auth/GqlAuthGuard';
import { UseGuards } from '@nestjs/common';
import { IJwtPayload } from '../auth/types';
import { CurrentUser } from '../auth/auth.decorator';

@UseGuards(GqlAuthGuard)
@Resolver(Account)
export class AccountResolver {
    constructor(
        private readonly _db: PrismaService,
    ) {}

    @Query(() => [Account])
    async getMyAccounts(
        @CurrentUser() user: IJwtPayload,
    ): Promise<Account[]> {
        return await this._db.account.findMany({
            where: {
                managers: {
                    some: {
                        employee: { userId: user.id }
                    }
                }
            }
        });
    }
}
