import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/GqlAuthGuard';
import { EmployeeCreateInput } from '@generated/prisma-nestjs-graphql/employee/employee-create.input';
import { Employee } from '@generated/prisma-nestjs-graphql/employee/employee.model';
import { EmployeeService } from './employee.service';
import { EmployerWhereInput } from '@generated/prisma-nestjs-graphql/employer/employer-where.input';

@UseGuards(GqlAuthGuard)
@Resolver(() => Employee)
export class EmployeeResolver {
    constructor(private readonly EmployeeService: EmployeeService){}
    
    @Query(() => [Employee])
    async employees(
        @Args({ name: 'name', type: () => String})
        name:string
    ) {
        return await this.EmployeeService.getManyByName(name);
    }

    @Mutation(() => Employee)
    async createEmployee(
        @Args({ name: 'input', type: () =>EmployeeCreateInput})
        data:EmployeeCreateInput
    ){
        return await this.EmployeeService.create(data);
    }
}