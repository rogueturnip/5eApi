// import { Parser } from '5eutils';
import { Parser } from '../../../5eUtils';

export class RaceFormatter {
  static singleRace = (race: any) => {
    return {
      id: race.id,
      name: race.name,
      alias: race.alias || [],
      source: race.source,
      otherSources: race.otherSources,
      additionalSources: race.additionalSources,
      page: race.page,
      size: Parser.sizeAbvToFull(race.size),
      // size: race.size,
      speed: Parser.getSpeedString(race.speed),
      ability: race.ability,
      entries: race.entries,
      soundClip: race.soundClip || null,
      subraces: race.subraces,
      darkvision: race.darkvision,
      proficiencies: {
        skill: race.skillProficiencies || null,
        weapon: race.weaponProficiencies || null,
        armor: race.armorProficiencies || null,
        language: race.languageProficiencies || null,
      },
      src: race.srd,
      heightAndWeight: race.heightAndWeight,
      additionalSpells: race.additionalSpells,
      damage: {
        immune: race.immune || [],
        resist: race.resist || [],
      },
      conditionImmune: race.conditionImmune || [],
      lineage: race.lineage,
      creatureTypes: race.creatureTypes,
      entriesFluff: race.entriesFluff,
      images: race.images,
    };
  };
}
