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

  type Attributes {
    cha: Int!
    con: Int!
    dex: Int!
    int: Int!
    str: Int!
    wis: Int!
  }

  type Saves {
    cha: Int!
    con: Int!
    dex: Int!
    int: Int!
    str: Int!
    wis: Int!
  }

  type Speed {
    text: String
    details: JSON
  }

  type Monster {
    id: String!
    name: String!
    alias: [String]
    page: Int
    size: String
    speed: Speed
    source: Source
    group: String
    creatureType: CreatureType
    pbNote: String
    hp: Hp
    ac: Ac
    cr: Cr
    alignment: String
    attr: Attributes
    saves: Saves
    languages: [String]
    environment: [String]
  }

  type Query {
    monster(id: String!): Monster
    monsters(limit: Int, offset: Int): [Monster!]!
  }
`;
