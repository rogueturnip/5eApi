import { Parser } from '5eutils';

export class ClassFormatter {
  static singleItem = (item: any) => {
    return {
      id: item.id,
      name: item.name,
      source: item.source,
      page: item.page,
    };
  };
}
