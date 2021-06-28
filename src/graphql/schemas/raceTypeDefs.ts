import { gql } from 'apollo-server-express';

export const typeDef = gql`
  type Race {
    id: String
    name: String
  }

  extend type Query {
    races: [Race!]!
  }
`;
