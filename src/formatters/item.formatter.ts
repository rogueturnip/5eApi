// import { Parser } from '5eutils';
import { Parser } from '../../../5eUtils';

export class ItemFormatter {
  static singleItem = (item: any) => {
    return {
      id: item.id,
      name: item.name,
      source: item.source,
      page: item.page,
      base: item.base,
    };
  };
}
