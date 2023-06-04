import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
    constructor() { }
    @Query(() => String)
    hello(): string {
        return 'Hello, world!';
    }

}
