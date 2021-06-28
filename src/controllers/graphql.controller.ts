import { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { apollo } from '../config';
import * as _ from 'lodash';
import { typeDef as Monster } from '../graphql/schemas/monsterTypeDefs';
import { typeDef as Race } from '../graphql/schemas/raceTypeDefs';
import { resolvers as monsterResolvers } from '../graphql/resolvers/monsterResolvers';

export class GraphQlController {
  public server: ApolloServer;

  constructor() {
    this.server = new ApolloServer({
      introspection: apollo.introspection,
      mocks: apollo.introspection,
      mockEntireSchema: apollo.mockSchema,
      playground: apollo.playground,
      context: ({ req, res }: any) => ({ req, res }),
      typeDefs: [Monster],
      resolvers: _.merge({}, monsterResolvers),
    });
  }

  public applyMiddleware(app: Application) {
    this.server.applyMiddleware({ app: app });
  }
}
