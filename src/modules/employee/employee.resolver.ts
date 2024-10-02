import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../core/prisma/prisma.service';
import { Employee, EmployeeWhereInput, EmployeeWhereUniqueInput } from './types';
import { PersonalData } from '../personal-data/types';
import { Route } from '../route/types';
import { User } from '../user/types';
import { Account } from '../account/types';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/GqlAuthGuard';
import { CurrentUser } from '../auth/auth.decorator';
import { IJwtPayload } from '../auth/types';

@UseGuards(GqlAuthGuard)
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

    @Query(() => [Employee])
    async getEmployeeList(
        @CurrentUser() user: IJwtPayload,
        @Args('where') where: EmployeeWhereInput): Promise<Employee[]> {
        return await this._db.employee.findMany({
            where: { 
                type: {in: where.employeeTypes },
                userId: { not: user.id }
            }
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
        console.log("routes", routes)
        return routes;
    }

    @ResolveField(() => [Account])
    async accounts(@Parent() root: Employee): Promise<Account[]> {
        const userId = root.userId;
        const accounts = await this._db.account.findMany({
            where: {
                managers: {
                    some: {
                        employee: { userId }
                    }
                },
            },
        });
        return accounts;
    }
    

    
    @ResolveField(() => PersonalData)
    async personalData(@Parent() root: Employee): Promise<PersonalData> {
        const id = root.id
        const employee = await this._db.personalData.findFirst({
            where: { employee:{every:{id}} },
        });
        return employee;
    }

    @ResolveField(() => User)
    async user(@Parent() root: Employee): Promise<User> {
        return await this._db.user.findFirst({
            where: { id: root.userId },
            include: { employee: true },
        });
    }
}
