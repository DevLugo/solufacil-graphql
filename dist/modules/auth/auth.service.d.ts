import { JwtService } from '@nestjs/jwt';
import { UserCreateInput } from '../../@generated/user/user-create.input';
import { User } from '../../@generated/user/user.model';
import { PrismaService } from '../../core/prisma/prisma.service';
import { SignInInput } from './signIn.input';
export declare class AuthService {
    private readonly _db;
    private readonly _jwtService;
    constructor(_db: PrismaService, _jwtService: JwtService);
    signup(data: UserCreateInput): Promise<User>;
    signin(signinDto: SignInInput): Promise<{
        token: string;
        user: User;
    }>;
}
