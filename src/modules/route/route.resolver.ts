import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../core/prisma/prisma.service';
import { Route, RouteWhereInput } from './types';
import { Location } from '../location/types';

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
        });
    }
    
    @ResolveField(() => [Location])
    async locations(@Parent() route: Route): Promise<Location[]> {
        const locations = await this._db.location.findMany({
            where: { routeId: route.id },
        });
        return locations
    }
}
