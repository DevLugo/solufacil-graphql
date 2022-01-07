import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PhoneCreateInput } from '../../@generated/prisma-nestjs-graphql/phone/phone-create.input';
import { Phone } from '../../@generated/prisma-nestjs-graphql/phone/phone.model';
import { GqlAuthGuard } from '../auth/GqlAuthGuard';
import { PhoneService } from './phone.service';

@UseGuards(GqlAuthGuard)
@Resolver()
export class PhoneResolver {
    constructor(private readonly _phoneService: PhoneService){}
    @Mutation(() => Phone)
    async createPhone(
        @Args({name:'input', type: () => PhoneCreateInput})
        data: PhoneCreateInput
    ){
        return await this._phoneService.createPhone(data);
    }
}
