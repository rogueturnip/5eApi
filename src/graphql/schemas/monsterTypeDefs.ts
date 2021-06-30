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

  type Skills {
    athletics: Int!
    acrobatics: Int!
    sleightOfHand: Int!
    stealth: Int!
    arcana: Int!
    history: Int!
    investigation: Int!
    nature: Int!
    religion: Int!
    animalHandling: Int!
    insight: Int!
    medicine: Int!
    perception: Int!
    survival: Int!
    deception: Int!
    intimidation: Int!
    performance: Int!
    persuasion: Int!
    passivePerception: Int!
  }

  type Speed {
    text: String
    details: JSON
  }

  type Conditions {
    immune: JSON
    inflict: JSON
    inflictLegendary: JSON
    inflictSpell: JSON
  }

  type Damage {
    immune: JSON
    resist: JSON
    vulnerabilities: JSON
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
    skills: Skills
    conditions: Conditions
    senses: JSON
    damage: Damage
    action: JSON
    actionNote: String
    reaction: JSON
    bonus: JSON
    spellcasting: JSON
  }

  type Query {
    monster(id: String!): Monster
    monsters(limit: Int, offset: Int): [Monster!]!
  }
`;
