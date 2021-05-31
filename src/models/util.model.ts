export interface OtherSources {
  source: string;
  page?: number;
}

export interface CreatureTypeObject {
  type: string;
  swarmSize?: string;
  tags?: string[] | { tag: string; prefix: string }[];
}

interface SpeedVal {
  number: number;
  condition: string;
}

export interface Speed {
  walk: SpeedVal;
  burrow: SpeedVal;
  climb: SpeedVal;
  fly: SpeedVal;
  canHover: boolean;
  swim: SpeedVal;
  choose: {
    from: string;
    amount: number;
    note?: string;
  };
  alternate: {
    walk: SpeedVal[];
    burrow: SpeedVal[];
    climb: SpeedVal[];
    fly: SpeedVal[];
    swim: SpeedVal[];
  };
}

export interface Saves {
  str: string;
  dex: string;
  con: string;
  int: string;
  wis: string;
  cha: string;
}
