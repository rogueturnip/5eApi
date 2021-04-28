import mongoose, { Schema, Model, Document } from 'mongoose';

export interface ISpell extends Document {
  id: string;
  name: string;
  source: string;
  page: number;
  level: number;
  savingThrow: any;
  abilityCheck: any;
  spellAttack: any;
  damageInflict: any;
  damageResist: any;
  damageImmune: any;
  damageVulnerable: any;
  conditionInflict: any;
  eldritdchInvocations: any;
  backgrounds: any;
  races: any;
  components: any;
  classes: any;
  entries: any;
  entriesHigherLevel: any;
  time: any;
  range: any;
  duration: any;
  scalingLevelDice: any;
  school: string;
  subschools: any;
}

const SpellSchema: Schema = new Schema({
  id: { type: String, require: true, unique: true },
  name: { type: String, require: true, unique: false },
  source: { type: String, require: false, unique: false },
  page: { type: Number, require: false, unique: false },
  level: { type: Number, require: false, unique: false },
  savingThrow: { type: Schema.Types.Mixed, require: false, unique: false },
  abilityCheck: { type: Schema.Types.Mixed, require: false, unique: false },
  spellAttack: { type: Schema.Types.Mixed, require: false, unique: false },
  damageInflict: { type: Schema.Types.Mixed, require: false, unique: false },
  damageResist: { type: Schema.Types.Mixed, require: false, unique: false },
  damageImmune: { type: Schema.Types.Mixed, require: false, unique: false },
  damageVulnerable: { type: Schema.Types.Mixed, require: false, unique: false },
  conditionInflict: { type: Schema.Types.Mixed, require: false, unique: false },
  eldritchInvocation: {
    type: Schema.Types.Mixed,
    require: false,
    unique: false,
  },
  backgrounds: { type: Schema.Types.Mixed, require: false, unique: false },
  races: { type: Schema.Types.Mixed, require: false, unique: false },
  components: { type: Schema.Types.Mixed, require: false, unique: false },
  classes: { type: Schema.Types.Mixed, require: false, unique: false },
  entries: { type: Schema.Types.Mixed, require: false, unique: false },
  entriesHigherLevel: {
    type: Schema.Types.Mixed,
    require: false,
    unique: false,
  },
  time: { type: Schema.Types.Mixed, require: false, unique: false },
  range: { type: Schema.Types.Mixed, require: false, unique: false },
  duration: { type: Schema.Types.Mixed, require: false, unique: false },
  scalingLevelDice: { type: Schema.Types.Mixed, require: false, unique: false },
  school: { type: String, require: false, unique: false },
  subschools: { type: Schema.Types.Mixed, require: false, unique: false },
});

export const Spell: Model<ISpell> = mongoose.model('Spell', SpellSchema);
