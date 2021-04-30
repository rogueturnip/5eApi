import { Parser } from '5eutils';

export class RaceFormatter {
  static singleRace = (race: any) => {
    return {
      id: race.id,
      name: race.name,
      alias: race.alias || [],
      source: race.source,
      page: race.page,
      size: Parser.sizeAbvToFull(race.size),
      immune: race.immune || [],
      resist: race.resist || [],
      conditionImmune: race.conditionImmune || [],
    };
  };
}
