import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInInput, SignInOutput, UserCreateInput } from './types';
import { User } from '../user/types';

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
