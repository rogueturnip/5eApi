import { prop, getModelForClass } from '@typegoose/typegoose';

class Monster {
  @prop({ required: true })
  public id: string;
  @prop({ required: true })
  public name: string;
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
  public alignment: any;
  @prop({ required: true })
  public size: string; // could be an enum
  @prop({ required: false })
  public sizeNote: string;
  @prop({ required: true })
  public speed: any;
  @prop({ required: true })
  public ac: any;
  @prop({ required: false })
  public cr: any;
  @prop({ required: true })
  public cha: any;
  @prop({ required: true })
  public con: any;
  @prop({ required: true })
  public dex: any;
  @prop({ required: true })
  public int: any;
  @prop({ required: true })
  public wis: any;
  @prop({ required: true })
  public str: any;
  @prop({ required: false })
  public saves: any;
  @prop({ required: false })
  public languages: any;
  @prop({ required: true })
  public hp: any;
  @prop({ required: false })
  public trait: any;
  @prop({ required: false })
  public actionNote: any;
  @prop({ required: false })
  public action: any;
  @prop({ required: false })
  public reaction: any;
  @prop({ required: false })
  public bonus: any;
  @prop({ required: false })
  public spellcasting: any;
  @prop({ required: false })
  public miscTags: any;
  @prop({ required: false })
  public actionTags: any;
  @prop({ required: false })
  public damageTags: any;
  @prop({ required: false })
  public traitTags: any;
  @prop({ required: false })
  public senseTags: any;
  @prop({ required: false })
  public legendary: any;
  @prop({ required: false })
  public legendaryGroup: any;
  @prop({ required: false })
  public legendaryHeader: any;
  @prop({ required: false })
  public page: any;
  @prop({ required: false })
  public type: any;
  @prop({ required: false })
  public senses: any;
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
  public passive: any;
  @prop({ required: false })
  public images: any;
  @prop({ required: false })
  public otherSources: any;
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
}

export const MonsterModel = getModelForClass(Monster);
