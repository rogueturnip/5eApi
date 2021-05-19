import { Application } from 'express';
import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-express';
import { apollo } from '../config';

export class GraphQlController {
  public server: ApolloServer;

  constructor() {
    this.server = new ApolloServer({
      introspection: apollo.introspection,
      mocks: apollo.introspection,
      mockEntireSchema: apollo.mockSchema,
      playground: apollo.playground,
      context: ({ req, res }: any) => ({ req, res }),
      typeDefs: gql`
        type Query {
          hello: String
        }
      `,
      resolvers: {
        Query: {
          hello: () => 'Hello world!',
        },
      },
    });
  }

  public applyMiddleware(app: Application) {
    this.server.applyMiddleware({ app: app });
  }
}
