import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IRace extends Document {
  id: string;
  name: string;
  alias: any;
  source: string;
  otherSources: any;
  additionalSources: any;
  page: number;
  size: string;
  speed: any;
  ability: any;
  languageProficiencies: any;
  entries: any;
  soundClip: any;
  subraces: any;
  darkvision: number;
  feats: number;
  skillProficiencies: any;
  srd: any;
  heightAndWeight: any;
  additionalSpells: any;
  resist: any;
  immune: any;
  conditionImmune: any;
  lineage: boolean;
  creatureTypes: any;
}

const RaceSchema: Schema = new Schema({
  id: { type: String, require: true, unique: true },
  name: { type: String, require: true, unique: false },
  alias: { type: Schema.Types.Mixed, require: true, unique: false },
  source: { type: String, require: false, unique: false },
  otherSources: { type: Schema.Types.Mixed, require: true, unique: false },
  additionalSources: { type: Schema.Types.Mixed, require: true, unique: false },
  page: { type: Number, require: false, unique: false },
  size: { type: String, require: false, unique: false },
  speed: { type: Schema.Types.Mixed, require: false, unique: false },
  ability: { type: Schema.Types.Mixed, require: false, unique: false },
  languageProficiencies: {
    type: Schema.Types.Mixed,
    require: false,
    unique: false,
  },
  entries: { type: Schema.Types.Mixed, require: false, unique: false },
  soundClip: { type: Schema.Types.Mixed, require: false, unique: false },
  subraces: { type: Schema.Types.Mixed, require: false, unique: false },
  darkvision: { type: Number, require: false, unique: false },
  feats: { type: Number, require: false, unique: false },
  skillProficiencies: {
    type: Schema.Types.Mixed,
    require: false,
    unique: false,
  },
  srd: { type: Schema.Types.Mixed, require: false, unique: false },
  heightAndWeight: { type: Schema.Types.Mixed, require: false, unique: false },
  additionalSpells: { type: Schema.Types.Mixed, require: false, unique: false },
  resist: { type: Schema.Types.Mixed, require: false, unique: false },
  immune: { type: Schema.Types.Mixed, require: false, unique: false },
  conditionImmune: { type: Schema.Types.Mixed, require: false, unique: false },
  lineage: { type: Boolean, require: false, unique: false },
  creatureTypes: { type: Schema.Types.Mixed, require: false, unique: false },
});

export const Race: Model<IRace> = mongoose.model('Race', RaceSchema);
