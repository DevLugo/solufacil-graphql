import { UserCreateInput } from '../../@generated/user/user-create.input';
import { User } from '../../@generated/user/user.model';
import { AuthService } from './auth.service';
import { SignInInput } from './signIn.input';
export declare class AuthResolver {
    private readonly AuthService;
    constructor(AuthService: AuthService);
    signUp(data: UserCreateInput): Promise<User>;
    signIn(data: SignInInput): Promise<{
        token: string;
        user: User;
    }>;
}
