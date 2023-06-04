import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../core/prisma/prisma.service';
import { Employee } from './types';
import { PersonalData } from '../personal-data/types';

@Resolver(Employee)
export class EmployeeResolver {
    constructor(
        private readonly _db: PrismaService,
    ){}

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
