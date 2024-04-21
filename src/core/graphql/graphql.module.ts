import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLFormattedError } from 'graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      driver: ApolloDriver,
      introspection: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/core/graphql/api-schemal.gql'),
      
    }),
  ],
})
export class GraphqlModule {}
