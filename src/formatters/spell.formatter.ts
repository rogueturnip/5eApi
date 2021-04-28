import { Parser } from '5eutils';

export class SpellFormatter {
  static singleSpell = (spell) => {
    return {
      id: spell.id,
      name: spell.name,
      source: spell.source,
      page: spell.page,
      level: spell.level,
      school: Parser.spSchool(spell.school),
      subschools: Parser.spSubschools(spell.subschools),
      savingThrow: spell.savingThrow || [],
      abilityCheck: spell.abilityCheck || [],
      spellAttack: spell.spellAttack || [],
      damageInflict: spell.damageInflict || [],
      damageResist: spell.damageResist || [],
      damageImmune: spell.damageImmune || [],
      damageVulnerable: spell.damageVulnerable || [],
      conditionInflict: spell.conditionInflict || [],
      components:
        Parser.spComponentsToFull(spell.components, spell.level) || {},
      classes: Parser.getOfficialSpellClass(spell.classes?.fromClassList) || [],
      classesVariant:
        Parser.getOfficialSpellClass(spell.classes?.fromClassListVariant) || [],
      subClasses:
        Parser.getOfficialSpellSubclass(spell.classes?.fromSubclass) || [],
      entries: spell.entries || [],
      entriesHigherLevel: spell.entriesHigherLevel || [],
      time: Parser.spTime(spell.time) || [],
      range: { text: Parser.spRange(spell.range), details: spell.range || {} },
      duration: {
        text: Parser.spDurationToFull(spell.duration) || [],
        details: spell.duration || [],
      },
    };
  };
}
