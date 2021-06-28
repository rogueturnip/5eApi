import { gql } from 'apollo-server-express';

export const typeDef = gql`
  scalar JSON
  type Source {
    abrv: String
    full: String
  }

  type CreatureType {
    name: String
    swarmSize: String
  }

  type Hp {
    average: Int
    formula: String
  }

  type Ac {
    text: String
    details: JSON
  }

  type Cr {
    text: String
    primary: String
    details: JSON
  }

  type Monster {
    id: String!
    name: String!
    alias: [String]
    page: Int
    source: Source
    group: String
    creatureType: CreatureType
    pbNote: String
    hp: Hp
    ac: Ac
    cr: Cr
    alignment: String
  }

  type Query {
    monster(id: String!): Monster
    monsters(limit: Int, offset: Int): [Monster!]!
  }
`;
