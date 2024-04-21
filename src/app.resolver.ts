import { Args, Mutation, Query, Resolver,  } from '@nestjs/graphql';
import { Loan, LoanCreateInput, TestInput } from './modules/loan/types';
import {BadRequestException, UsePipes, ValidationPipe} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ValidateInput } from './core/general/decorators';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './modules/auth/GqlAuthGuard';

@UseGuards(GqlAuthGuard)
@Resolver()
export class AppResolver {
    constructor() { }
    @Query(() => String)
    hello(): string {
        return 'Hello, world!';
    }

}
