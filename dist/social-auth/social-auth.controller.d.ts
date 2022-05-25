import { Request } from 'express';
export declare class SocialAuthController {
    facebookLogin(): Promise<any>;
    test(req: Request): Promise<any>;
    facebookLoginRedirect(req: Request): Promise<any>;
}
