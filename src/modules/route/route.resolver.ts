import { Args, Query, Resolver } from '@nestjs/graphql';
import { RouteWhereUniqueInput } from 'src/@generated/route/route-where-unique.input';
import { RouteWhereInput } from 'src/@generated/route/route-where.input';
import { Route } from 'src/@generated/route/route.model';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Resolver(Route)
export class RouteResolver {
    constructor(
        private readonly _db: PrismaService,
    ){}

    @Query(() => [Route])
    async getRoutes(
        @Args({ name: 'where', type: () => RouteWhereInput})
        where:RouteWhereInput
    ) {
        return await this._db.route.findMany({
            where,
            include:{
                localities:true
            }
        });
    }
}
