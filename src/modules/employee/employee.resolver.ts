import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/GqlAuthGuard';
import { EmployeeCreateInput } from '../../@generated/employee/employee-create.input';
import { Employee } from '../../@generated/employee/employee.model';
import { EmployeeService } from './employee.service';
import { EmployeeWhereInput } from '../../@generated/employee/employee-where.input';
import { EmployeeWhereUniqueInput } from 'src/@generated/employee/employee-where-unique.input';

@UseGuards(GqlAuthGuard)
@Resolver(() => Employee)
export class EmployeeResolver {
    constructor(private readonly EmployeeService: EmployeeService){}
    
    @Query(() => [Employee])
    async employees(
        @Args({ name: 'where', type: () => EmployeeWhereInput})
        where:EmployeeWhereInput
    ) {
        return await this.EmployeeService.getMany(where);
    }

    @Query(() => Employee)
    async getEmployee(
        @Args({ name: 'where', type: () => EmployeeWhereUniqueInput})
        where:EmployeeWhereUniqueInput
    ) {
        return await this.EmployeeService.getUnique(where);
    }

    @Mutation(() => Employee)
    async createEmployee(
        @Args({ name: 'input', type: () =>EmployeeCreateInput})
        data:EmployeeCreateInput
    ){
        return await this.EmployeeService.create(data);
    }
}