import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../core/prisma/prisma.service';
import { PersonalData } from './types';
import { Phone } from '../phone/types';
import { Address } from '../address/types';

@Resolver(PersonalData)
export class PersonalDataResolver {
    constructor(
        private readonly _db: PrismaService,
    ) { }

    @ResolveField(() => [Phone])
    async phones(@Parent() root: PersonalData): Promise<Phone[]> {
        const id = root.id
        const employee = await this._db.phone.findMany({
            where: { personalDataId: id },
        });
        return employee;
    }

    @ResolveField(() => [Address])
    async addresses(@Parent() root: PersonalData): Promise<Address[]> {
        const id = root.id
        const employee = await this._db.address.findMany({
            where: { personalDataId: id },
        });
        return employee;
    }

}
