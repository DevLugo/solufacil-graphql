import { Injectable } from '@nestjs/common';
import { EmployeeCreateInput } from '../../@generated/prisma-nestjs-graphql/employee/employee-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class EmployeeService {
    constructor(private readonly db: PrismaService){}
    async create(data: EmployeeCreateInput) {
        return await this.db.employee.create({data});
    }
    
    async getMany() {
        return await this.db.employee.findMany();
      }
}
