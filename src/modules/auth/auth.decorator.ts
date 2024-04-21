import { AuthenticationError } from '@nestjs/apollo';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    console.log("ctx.getContext().req.user", ctx.getContext().req.user)
    if(!(ctx.getContext().req.user)) throw new AuthenticationError("You are not authenticated");
    return ctx.getContext().req.user;
  },
);