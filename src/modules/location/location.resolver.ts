import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../core/prisma/prisma.service';
import { Location, LocationWhereInput } from './types';
import { Employee } from '../employee/types';
import { State } from '../state/types';
import { Municipality } from '../municipality/types';

@Resolver(Location)
export class LocationResolver {
    constructor(
        private readonly _db: PrismaService,
    ){}
    
    @ResolveField(() => [Employee])
    async leads(@Parent() root: Location) {
        const { id } = root;
        return await this._db.employee.findMany({
            where:{
                type: "LOAN_LEAD",
                personalData:{
                    addresses:{
                        some:{
                            locationId:id
                        }
                    }
                }
            }
        });
    }

    @ResolveField(() => [Municipality])
    async municipality(@Parent() root: Location) {
        return await this._db.municipality.findMany({
            where:{
                id: root.municipalityId
            }
        });
    }

    @ResolveField(() => [State])
    async state(@Parent() root: Location) {
        return await this._db.state.findMany({
            where:{
                id: root.stateId
            }
        });
    }
}
