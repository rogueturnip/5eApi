import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IMonster extends Document {
    id: string;
    name: string;
    pbNote: string;
    alias: any;
    group: String;
    alignment: any;
    size: any;
    sizeNote: any;
    speed: any;
    ac: any;
    cr: any;
    cha: any;
    con: any;
    dex: any;
    int: any;
    wis: any;
    str: any;
    saves: any;
    languages: any;
    hp: any;
    trait: any;
    actionNote: any;
    action: any;
    reaction: any;
    bonus: any;
    spellcasting: any;
    miscTags: any;
    actionTags: any;
    damageTags: any;
    traitTags: any;
    senseTags: any;
    legendary: any;
    legendaryGroup: any;
    legendaryHeader: any;
    page: any;
    type: any;
    senses: any;
    conditionImmune: any;
    conditionInflict: any;
    conditionInflictLegendary: any;
    conditionInflictSpell: any;
    environment: any;
    immune: any;
    resist: any;
    vulnerable: any;
    skill: any;
    passive: any;
    images: any;
    otherSources: any;
    soundClip: any;
    fluffEntries: any;
    entries: any;
    variant: any;
    mythic: any;
    mythicHeader: any;
    lairActions: any;
    regionalEffects: any;
    mythicEncounter: any;
}

const MonsterSchema: Schema = new Schema({
    id: { type: String, require: true, unique: true },
    name: { type: String, require: true, unique: false },
    alias: { type: Schema.Types.Mixed, require: false, unique: false },
    group: { type: String, require: false, unique: false },
    pbNote: { type: String, require: false, unique: false },
    alignment: { type: Schema.Types.Mixed, require: false, unique: false },
    size: { type: Schema.Types.Mixed, require: false, unique: false },
    sizeNote: { type: Schema.Types.Mixed, require: false, unique: false },
    speed: { type: Schema.Types.Mixed, require: false, unique: false },
    ac: { type: Schema.Types.Mixed, require: false, unique: false },
    cr: { type: Schema.Types.Mixed, require: false, unique: false },
    hp: { type: Schema.Types.Mixed, require: false, unique: false },
    trait: { type: Schema.Types.Mixed, require: false, unique: false },
    actionNote: { type: Schema.Types.Mixed, require: false, unique: false },
    action: { type: Schema.Types.Mixed, require: false, unique: false },
    reaction: { type: Schema.Types.Mixed, require: false, unique: false },
    bonus: { type: Schema.Types.Mixed, require: false, unique: false },
    spellcasting: { type: Schema.Types.Mixed, require: false, unique: false },
    cha: { type: Number, require: false, unique: false },
    con: { type: Number, require: false, unique: false },
    dex: { type: Number, require: false, unique: false },
    int: { type: Number, require: false, unique: false },
    wis: { type: Number, require: false, unique: false },
    str: { type: Number, require: false, unique: false },
    saves: { type: Schema.Types.Mixed, require: false, unique: false },
    languages: { type: Schema.Types.Mixed, require: false, unique: false },
    miscTags: { type: Schema.Types.Mixed, require: false, unique: false },
    actionTags: { type: Schema.Types.Mixed, require: false, unique: false },
    damageTags: { type: Schema.Types.Mixed, require: false, unique: false },
    traitTags: { type: Schema.Types.Mixed, require: false, unique: false },
    senseTags: { type: Schema.Types.Mixed, require: false, unique: false },
    legendary: { type: Schema.Types.Mixed, require: false, unique: false },
    legendaryGroup: { type: Schema.Types.Mixed, require: false, unique: false },
    legendaryHeader: { type: Schema.Types.Mixed, require: false, unique: false },
    page: { type: Schema.Types.Mixed, require: false, unique: false },
    type: { type: Schema.Types.Mixed, require: false, unique: false },
    senses: { type: Schema.Types.Mixed, require: false, unique: false },
    conditionImmune: { type: Schema.Types.Mixed, require: false, unique: false },
    conditionInflict: { type: Schema.Types.Mixed, require: false, unique: false },
    conditionInflictLegendary: { type: Schema.Types.Mixed, require: false, unique: false },
    conditionInflictSpell: { type: Schema.Types.Mixed, require: false, unique: false },
    environment: { type: Schema.Types.Mixed, require: false, unique: false },
    immune: { type: Schema.Types.Mixed, require: false, unique: false },
    resist: { type: Schema.Types.Mixed, require: false, unique: false },
    vulnerable: { type: Schema.Types.Mixed, require: false, unique: false },
    skill: { type: Schema.Types.Mixed, require: false, unique: false },
    passive: { type: Schema.Types.Mixed, require: false, unique: false },
    images: { type: Schema.Types.Mixed, require: false, unique: false },
    otherSources: { type: Schema.Types.Mixed, require: false, unique: false },
    soundClip: { type: Schema.Types.Mixed, require: false, unique: false },
    fluffEntries: { type: Schema.Types.Mixed, require: false, unique: false },
    entries: { type: Schema.Types.Mixed, require: false, unique: false },
    variant: { type: Schema.Types.Mixed, require: false, unique: false },
    mythic: { type: Schema.Types.Mixed, require: false, unique: false },
    mythicHeader: { type: Schema.Types.Mixed, require: false, unique: false },
    lairActions: { type: Schema.Types.Mixed, require: false, unique: false },
    regionalEffects: { type: Schema.Types.Mixed, require: false, unique: false },
    mythicEncounter: { type: Schema.Types.Mixed, require: false, unique: false },
});

export const Monster: Model<IMonster> = mongoose.model('Monster', MonsterSchema);
