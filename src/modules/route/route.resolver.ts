import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../core/prisma/prisma.service';
import { Route, RouteWhereInput } from './types';
import { Location } from '../location/types';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/GqlAuthGuard';

@UseGuards(GqlAuthGuard)
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
            include:{
                municipality:{
                    include:{
                        state:true
                    }
                }
            }
        });

        return locations.map(location => ({
            ...location,
            stateId: location.municipality.state.id,
        }));
    }
}
