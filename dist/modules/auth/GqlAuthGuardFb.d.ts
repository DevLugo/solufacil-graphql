import { ExecutionContext } from "@nestjs/common";
declare const GqlAuthGuardFb_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GqlAuthGuardFb extends GqlAuthGuardFb_base {
    getRequest(context: ExecutionContext): any;
}
export {};
