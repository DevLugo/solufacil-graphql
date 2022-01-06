import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserCreateInput } from '../../@generated/prisma-nestjs-graphql/user/user-create.input';
import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model';
import { AuthService } from './auth.service';
import { SignInInput } from './signIn.input';
import { SignInOutput } from './signIn.output';

@Resolver()
export class AuthResolver {
    constructor(private readonly AuthService: AuthService) {}

    @Mutation(() => User)
    async signUp(
        @Args({ name: 'input', type: () => UserCreateInput})
        data: UserCreateInput
    ){
        return await this.AuthService.signup(data);
    }

    @Mutation(() => SignInOutput)
    async signIn(
        @Args({ name: 'input', type: () => SignInInput})
        data: SignInInput
    ){
        return await this.AuthService.signin(data);
    }
}
