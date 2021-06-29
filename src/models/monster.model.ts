import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';
import {
  OtherSources,
  CreatureTypeObject,
  Speed,
  Saves,
  Special,
} from './util.model';

interface AlignObject {
  alignment: Align[];
  chance?: string;
  note?: string;
}

type Align = string | AlignObject | Special;

interface AcItemObject {
  ac: number;
  from?: string[];
  condition?: string;
  braces?: boolean;
}

type AcItem = number | AcItemObject | Special;

interface CrObject {
  cr: string;
  lair?: string;
  coven?: string;
  xp?: number;
}

type Cr = string | CrObject;

interface Hp {
  average?: number;
  formula?: string;
}

@modelOptions({ options: { allowMixed: 1 } })
class Monster {
  @prop({ required: true })
  public id: string;
  @prop({ required: true })
  public name: string;
  @prop({ required: false })
  public _copy: any;
  @prop({ required: false })
  public shortName: string;
  @prop({ required: true })
  public source: string;
  @prop({ required: false })
  public pbNote: string;
  @prop({ required: false })
  public alias: string[];
  @prop({ required: false })
  public group: string | null;
  @prop({ required: false })
  public alignment: Align[];
  @prop({ required: true })
  public size: string; // could be an enum
  @prop({ required: false })
  public sizeNote: string;
  @prop({ required: true })
  public speed: Speed;
  @prop({ required: true })
  public ac: AcItem[];
  @prop({ required: false })
  public cr: Cr;
  @prop({ required: true })
  public cha: number;
  @prop({ required: true })
  public con: number;
  @prop({ required: true })
  public dex: number;
  @prop({ required: true })
  public int: number;
  @prop({ required: true })
  public wis: number;
  @prop({ required: true })
  public str: number;
  @prop({ required: false })
  public saves: Saves;
  @prop({ required: false })
  public languages: string[] | null;
  @prop({ required: true })
  public hp: Hp | Special;
  @prop({ required: false })
  public trait: any;
  @prop({ required: false })
  public actionNote: string;
  @prop({ required: false })
  public action: any;
  @prop({ required: false })
  public reaction: any;
  @prop({ required: false })
  public bonus: any;
  @prop({ required: false })
  public spellcasting: any;
  @prop({ required: false })
  public legendary: any;
  @prop({ required: false })
  public legendaryGroup: any;
  @prop({ required: false })
  public legendaryHeader: any;
  @prop({ required: false })
  public page: number;
  @prop({ required: false })
  public type: string | CreatureTypeObject;
  @prop({ required: false })
  public senses: string[] | null;
  @prop({ required: false })
  public conditionImmune: any;
  @prop({ required: false })
  public conditionInflict: any;
  @prop({ required: false })
  public conditionInflictLegendary: any;
  @prop({ required: false })
  public conditionInflictSpell: any;
  @prop({ required: false })
  public environment: any;
  @prop({ required: false })
  public immune: any;
  @prop({ required: false })
  public resist: any;
  @prop({ required: false })
  public vulnerable: any;
  @prop({ required: false })
  public skill: any;
  @prop({ required: true })
  public passive: number | string;
  @prop({ required: false })
  public images: any;
  @prop({ required: false })
  public otherSources: OtherSources;
  @prop({ required: false })
  public soundClip: any;
  @prop({ required: false })
  public fluffEntries: any;
  @prop({ required: false })
  public entries: any;
  @prop({ required: false })
  public variant: any;
  @prop({ required: false })
  public mythic: any;
  @prop({ required: false })
  public mythicHeader: any;
  @prop({ required: false })
  lairActions: any;
  @prop({ required: false })
  public regionalEffects: any;
  @prop({ required: false })
  public mythicEncounter: any;
  @prop({ required: false })
  public familiar: boolean;
}

export const MonsterModel = getModelForClass(Monster);
