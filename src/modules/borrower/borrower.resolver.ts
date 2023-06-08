import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PersonalData } from '../personal-data/types';
import { Employee } from '../employee/types';
import { PrismaService } from '../../core/prisma/prisma.service';
import { Borrower, EmployeeWhereInput } from './types';

@Resolver(Borrower)
export class BorrowerResolver {

    constructor(
        private readonly _db: PrismaService,  
    ){}

    @Query(() => Borrower)
    async getBorrower(@Args('id') id: string): Promise<Borrower> {
        return this._db.borrower.findUnique({where: {id}});
    }

    @Query(() => [Borrower])
    async getBorrowers(
        @Args('where', {nullable:true}) where: EmployeeWhereInput
    ): Promise<Borrower[]> {
        return this._db.borrower.findMany(
            {
                where:{
                    personalData:{
                        addresses:{
                            some:{locationId:where.locationId}
                        }
                    }
                }
            }
        );

    }

    @ResolveField(() => Employee)
    async grantor(@Parent() root: Borrower): Promise<Employee> {
        const { grantorId:id } = root;
        return this._db.employee.findUnique({ where: { id } });
    }

    @ResolveField(() => PersonalData)
    async personalData(@Parent() root: Borrower): Promise<PersonalData> {
        const { personalDataId:id } = root;
        return this._db.personalData.findUnique({ where: { id } });
    }
}
