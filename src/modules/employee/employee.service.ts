import { Injectable } from '@nestjs/common';
import { EmployeeWhereInput } from '../../@generated/employee/employee-where.input';
import { EmployeeCreateInput } from '../../@generated/employee/employee-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class EmployeeService {
    constructor(private readonly db: PrismaService){}
    async create(data: EmployeeCreateInput) {
        // @ts-ignore
        return await this.db.employee.create({
            data: {
                ...data,
                type: data.type,
            }, 
            include:{
                user:true
            }
        });
    }
    
    async getManyByName(name: string) {
        return await this.db.employee.findMany({
            where:{
                personalData:{
                    fullName:{
                        contains: name,
                        mode: "insensitive"
                    }
                }
            },
            include: { user:true }
        });
      }

      async getMany(where: EmployeeWhereInput) {
        return await this.db.employee.findMany({
            where,
            include: { user:true }
        });
      }
}



