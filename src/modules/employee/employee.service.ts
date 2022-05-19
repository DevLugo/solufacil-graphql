import { Injectable } from '@nestjs/common';
import { EmployeeCreateInput } from '../../@generated/employee/employee-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class EmployeeService {
    constructor(private readonly db: PrismaService){}
    async create(data: EmployeeCreateInput) {
        return await this.db.employee.create({data, include:{
            user:true
        }});
    }
    
    async getManyByName(name: string) {
        return await this.db.employee.findMany({
            where:{
                user:{
                    fullName: {
                        contains: name,
                        mode: "insensitive"
                    }
                }
            },
            include: { user:true }
        });
      }
}



