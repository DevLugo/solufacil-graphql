import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../core/prisma/prisma.service';
import { Employee, EmployeeWhereUniqueInput } from './types';
import { PersonalData } from '../personal-data/types';
import { Route } from '../route/types';

@Resolver(Employee)
export class EmployeeResolver {
    constructor(
        private readonly _db: PrismaService,
    ){}

    @Query(() => Employee)
    async getEmployee(@Args('where') where: EmployeeWhereUniqueInput): Promise<Employee> {
        return await this._db.employee.findUnique({
            where: { id: where.id}
        });
    }

    @ResolveField(() => [Route])
    async routes(@Parent() root: Employee): Promise<Route[]> {
        const id = root.id
        const routes = await this._db.route.findMany({
            where: { employees:{
                every:{id}
            } },
        });
        return routes;
    }
    

    
    @ResolveField(() => PersonalData)
    async personalData(@Parent() root: Employee): Promise<PersonalData> {
        const id = root.id
        console.log(id)
        const employee = await this._db.personalData.findFirst({
            where: { employee:{every:{id}} },
        });
        return employee;
    }
}
