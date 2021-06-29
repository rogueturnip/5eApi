import * as _ from 'lodash';
import { MonsterModel as Monster } from '../../models/monster.model';
import { MonsterFormatter } from '../../formatters/monster.formatter';

export const resolvers = {
  Query: {
    monster: async (_, { id }) => {
      const monster = await Monster.findOne({ id: id });
      //   console.log(MonsterFormatter.singleMonster(monster));
      return MonsterFormatter.singleMonster(monster);
    },
    monsters: async (_, { limit = 10, offset = 0 }) => {
      let monsters = await Monster.find({}).skip(offset).limit(limit);
      //   console.log('monsters', monsters);
      return await Promise.all(
        monsters.map((monster) => {
          return MonsterFormatter.singleMonster(monster);
        }),
      );
    },
  },
};
