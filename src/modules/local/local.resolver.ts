import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LocalCreateInput } from '../../@generated/local/local-create.input';
import { LocalWhereInput } from '../../@generated/local/local-where.input';
import { Local } from '../../@generated/local/local.model';
import { LocalService } from './local.service';

@Resolver()
export class LocalResolver {
    constructor(
        private readonly LocaService: LocalService,
        ){}
    @Mutation(() => Local)
    async createLocal(
        @Args({ name: 'input', type: () => LocalCreateInput})
        data: LocalCreateInput
    ){
        return await this.LocaService.create(data);
    }

    @Query(() => [Local])
    async locals(
        @Args({ name: 'where', type: () => LocalWhereInput})
        where:LocalWhereInput
    ) {
        return await this.LocaService.getMany(where);
    }
}
