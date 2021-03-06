// import { Parser } from '5eutils';
import { Parser } from '../../../5eUtils';

export class MonsterFormatter {
  static singleMonster = (monster: any) => {
    return {
      id: monster.id,
      name: monster.name,
      source: {
        abrv: monster.source,
        full: Parser.getFullSource(monster.source) || 'unknown',
      },
      alias: monster.alias || [],
      group: monster.group || null,
      creatureType: Parser.getCreatureType(monster.type) || null,
      pbNote: monster.pbNote || null,
      hp: monster.hp,
      ac: { text: Parser.acToFull(monster.ac), details: monster.ac },
      cr: {
        text: Parser.monCrToFull(monster.cr),
        details:
          typeof monster.cr === 'object' ? monster.cr : { cr: monster.cr },
      },
      alignment: Parser.alignmentAbvToFull({
        alignment: monster.alignment,
      }),
      action: monster.action || [],
      actionNote: monster.actionNote || null,
      reaction: monster.reaction || [],
      bonus: monster.bonus || [],
      spellcasting: monster.spellcasting || [],
      trait: monster.trait || [],
      legendary: monster.legendary || [],
      size: Parser.sizeAbvToFull(monster.size),
      page: monster.page,
      attr: {
        cha: monster.cha,
        con: monster.con,
        dex: monster.dex,
        int: monster.int,
        str: monster.str,
        wis: monster.wis,
      },
      saves: {
        cha: parseInt(monster.saves?.cha) || 0,
        con: parseInt(monster.saves?.con) || 0,
        dex: parseInt(monster.saves?.dex) || 0,
        int: parseInt(monster.saves?.int) || 0,
        str: parseInt(monster.saves?.str) || 0,
        wis: parseInt(monster.saves?.wis) || 0,
      },
      skills: {
        athletics: parseInt(monster.skill?.athletics) || 0,
        acrobatics: parseInt(monster.skill?.acrobatics) || 0,
        sleightOfHand: parseInt(monster.skill?.['sleight of hand']) || 0,
        stealth: parseInt(monster.skill?.stealth) || 0,
        arcana: parseInt(monster.skill?.arcana) || 0,
        history: parseInt(monster.skill?.history) || 0,
        investigation: parseInt(monster.skill?.investigation) || 0,
        nature: parseInt(monster.skill?.nature) || 0,
        religion: parseInt(monster.skill?.religion) || 0,
        animalHandling: parseInt(monster.skill?.['animal handling']) || 0,
        insight: parseInt(monster.skill?.insight) || 0,
        medicine: parseInt(monster.skill?.medicine) || 0,
        perception: parseInt(monster.skill?.perception) || 0,
        survival: parseInt(monster.skill?.survival) || 0,
        deception: parseInt(monster.skill?.deception) || 0,
        intimidation: parseInt(monster.skill?.intimidation) || 0,
        performance: parseInt(monster.skill?.performance) || 0,
        persuasion: parseInt(monster.skill?.persuasion) || 0,
        passivePerception: parseInt(monster.passive) || 0,
      },
      speed: {
        text: Parser.getSpeedString({ speed: monster.speed }),
        details: monster.speed || {},
      },
      senses: Parser.senseToObject(monster.senses) || [],
      conditions: {
        immune: monster.conditionImmune || [],
        inflict: monster.conditionInflict || [],
        inflictLegendary: monster.conditionInflictLegendary || [],
        inflictSpell: monster.conditionInflictSpell || [],
      },
      languages: monster.languages,
      damage: {
        immune: monster.immune || [],
        resist: monster.resist || [],
        vulnerabilities: monster.vulnerable || [],
      },
      environment: monster.environment || [],
      lairActions: monster.lairActions || [],
      regionalEffects: monster.regionalEffects || [],
      mythicEffects: monster.mythicEncounter || [],
    };
  };
}
