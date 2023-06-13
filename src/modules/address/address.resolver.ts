import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../core/prisma/prisma.service';
import { Address } from './types';
import { Location } from '../location/types';

@Resolver(Address)
export class AddressResolver {
    constructor(
        private readonly _db: PrismaService,
    ) {}

    @ResolveField(() => Location)
    async location(@Parent() root: Address) {
        return await this._db.location.findUnique({
            where: {
                id: root.locationId
            }
        });
    }
}
