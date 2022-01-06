import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/GqlAuthGuard';
import { EmployeeCreateInput } from '../../@generated/prisma-nestjs-graphql/employee/employee-create.input';
import { Employee } from '../../@generated/prisma-nestjs-graphql/employee/employee.model';
import { EmployeeService } from './employee.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => Employee)
export class EmployeeResolver {
    constructor(private readonly EmployeeService: EmployeeService){}
    
    //@UseGuards(GqlAuthGuardFb)
    @Query(() => [Employee])
    async employees() {
        return await this.EmployeeService.getMany();
    }

    @Mutation(() => Employee)
    async createEmployee(
        @Args({ name: 'input', type: () =>EmployeeCreateInput})
        data:EmployeeCreateInput
    ){
        return await this.EmployeeService.create(data);
    }
}