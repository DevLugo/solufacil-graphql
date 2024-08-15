import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLFormattedError } from 'graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      driver: ApolloDriver,
      introspection: true,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/core/graphql/api-schemal.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],

    }),
  ],
})
export class GraphqlModule {}
