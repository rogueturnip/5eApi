export interface Special {
  special: string;
}

export interface Choose {
  from?: string[];
  count?: number;
}

export interface OtherSourceObject {
  source: string;
  page?: number;
}

export type OtherSources = OtherSourceObject[];

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

export interface AdditionalSourceObject {
  source: string;
  page?: number;
}

export type AdditionalSource = AdditionalSourceObject[];

export interface LanguageProficienciesObject {
  choose?: Choose;
  any?: number;
  anyStandard?: number;
  abyssal?: boolean;
  celestial?: boolean;
  'deep speech'?: boolean;
  draconic?: boolean;
  infernal?: boolean;
  primordial?: boolean;
  sylvan?: boolean;
  undercommon?: boolean;
  dwarvish?: boolean;
  elvish?: boolean;
  giant?: boolean;
  other?: boolean;
}

export type LanguageProficiencies = LanguageProficienciesObject[];

export interface ToolProficienciesObject {
  "artisan's tools"?: boolean;
  "cartographer's tools"?: boolean;
  'disguise kit'?: boolean;
  'forgery kit'?: boolean;
  'gaming set'?: boolean;
  'herbalism kit'?: boolean;
  'musical instrument'?: boolean;
  "navigator's tools"?: boolean;
  "thieves' tools"?: boolean;
  'vehicles (land)'?: boolean;
  'vehicles (water)'?: boolean;
  any?: number;
  choose?: Choose;
}

export type ToolProficiencies = ToolProficienciesObject[];

export interface SkillProficienciesObject {
  athletics?: boolean;
  acrobatics?: boolean;
  'sleight of hand'?: boolean;
  stealth?: boolean;
  arcana?: boolean;
  history?: boolean;
  investigation?: boolean;
  nature?: boolean;
  religion?: boolean;
  'animal handling'?: boolean;
  insight?: boolean;
  medicine?: boolean;
  perception?: boolean;
  survival?: boolean;
  deception?: boolean;
  intimidation?: boolean;
  performance?: boolean;
  persuasion?: boolean;
  tool?: boolean;
  choose?: Choose;
}

export type SkillProficiencies = SkillProficienciesObject[];

export interface WeaponProficienciesObject {
  simple?: boolean;
  martial?: boolean;
  firearms?: boolean;
  'battleaxe|phb'?: boolean;
  'club|phb'?: boolean;
  'dagger|phb'?: boolean;
  'flail|phb'?: boolean;
  'glaive|phb'?: boolean;
  'greataxe|phb'?: boolean;
  'greatclub|phb'?: boolean;
  'greatsword|phb'?: boolean;
  'halberg|phb'?: boolean;
  'handax|phb'?: boolean;
  'javelin|phb'?: boolean;
  'lance|phb'?: boolean;
  'light hammer|phb'?: boolean;
  'longsword|phb'?: boolean;
  'mace|phb'?: boolean;
  'maul|phb'?: boolean;
  'morningstart|phb'?: boolean;
  'pike|phb'?: boolean;
  'quarterstaff|phb'?: boolean;
  'rapier|phb'?: boolean;
  'scimitar|phb'?: boolean;
  'sickle|phb'?: boolean;
  'spear|phb'?: boolean;
  'staff|phb'?: boolean;
  'trident|phb'?: boolean;
  'war pick|phb'?: boolean;
  'blow gun|phb'?: boolean;
  'dart|phb'?: boolean;
  'hand crossbow|phb'?: boolean;
  'heavy crossbow|phb'?: boolean;
  'light crossbow|phb'?: boolean;
  'longbow|phb'?: boolean;
  'net|phb'?: boolean;
  'shortbow|phb'?: boolean;
  'sling|phb'?: boolean;
  'double-bladed scimitar|erlw'?: boolean;
  choose?: Choose;
}

export type WeaponProficiencies = WeaponProficienciesObject[];

export interface ArmorProficienciesObject {
  light?: boolean;
  medium?: boolean;
  heavy?: boolean;
  'shield|phb'?: boolean;
}

export type ArmorProficiencies = ArmorProficienciesObject[];

export type DataCondition = string;
export type DataDamageType = string;
export type DataOptionalFeatureType = string;
export type Srd = boolean | string;
