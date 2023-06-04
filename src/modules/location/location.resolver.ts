import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../core/prisma/prisma.service';
import { Location, LocationWhereInput } from './types';
import { Employee } from '../employee/types';

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
}
