import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from '../../models/user/user.model';
import { SignInInput, SignInOutput } from './types';

@Resolver()
export class AuthResolver {
    constructor(private readonly AuthService: AuthService) {}

    /* @Mutation(() => User)
    async signUp(
        @Args({ name: 'input', type: () => UserCreateInput})
        data: UserCreateInput
    ){
        return await this.AuthService.signup(data);
    } */

    @Mutation(() => SignInOutput)
    async signIn(
        @Args({ name: 'input', type: () => SignInInput})
        data: SignInInput
    ){
        return await this.AuthService.signin(data);
    }
}
