import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Employee } from '../../@generated/employee/employee.model';
import { LocationWhereUniqueInput } from '../../@generated/location/location-where-unique.input';
import { LocationWhereInput } from '../../@generated/location/location-where.input';
import { Location } from '../../@generated/location/location.model';
import { Municipality } from '../../@generated/municipality/municipality.model';
import { State } from '../../@generated/state/state.model';
import { User } from '../../@generated/user/user.model';
import { PrismaService } from '../../core/prisma/prisma.service';


function calculateDaysBetweenDates(begin, end){
    const date1 = new Date(begin);
    const date2 = new Date(end);
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 *24)); 
    return diffDays;    
}

@Resolver(() => Location)
export class LocationResolver {
    constructor(
        private readonly _db: PrismaService,
    ){}

    @Query(() => [Location])
    async locations(
        @Args({ name: 'where', type: () => LocationWhereInput})
        where:LocationWhereInput
    ) {
        return await this._db.location.findMany({where});
    }

    @Query(() => Location)
    async location(
        @Args({ name: 'where', type: () => LocationWhereUniqueInput})
        where:LocationWhereUniqueInput
    ) {
        return await this._db.location.findUnique({where});
    }

    @ResolveField('municipality', returns => Municipality)
    async municipality(@Parent() root: Location) {
        const { id } = root;
        return await this._db.location.findUnique(
            {
                where:{ id }, 
                include:{
                    municipality:{
                        include: {
                            state:true
                        }
                    }
            }
        });
    }

    @ResolveField('state', returns => State)
    async state(@Parent() root: Location) {
        const stateId =  root.municipality.stateId;
        return  await this._db.state.findFirst(
            {
                where:{ 
                    id:stateId,
                }, 
            }
        )
    }

    @ResolveField('leads', returns => [Employee])
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
            },
            include:{
                personalData:true
            }
        });
    }
}
