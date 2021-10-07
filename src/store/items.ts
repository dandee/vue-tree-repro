import axios from 'axios'
import { defineStore } from "pinia";

import { Item } from '../model/item';
import { TreeNodeConfig } from '../model/tree-view';


type ItemsState = {
  items: Item[];
  itemTree: Item[];
  treeDefaults: TreeNodeConfig;
};

function addChildren(item: Item, items: Item[]) {
  if (!item.children) {
    item.children = []
  }

  items
    .filter((i) => i.parentId === item.id)
    .forEach((i) => {
      item.children!.push(i);

      addChildren(i, items);
    });
}

function makeItemTree(items: Item[]): Item[] {
  const root = items.find((pc) => pc.parentId === 0) as Item;

  if (root) {
    root.name = 'Items:';

    addChildren(root, items);

    return [root];
  }

  return [];
}

export const itemsStore: any = defineStore({
  id: 'itemsStore',
  state: () => ({
    items: [],
    itemTree: [],
    treeDefaults: {
      labelProperty: 'name',
      selectable: true,
      state: {
        expanded: true
      }
    }
  } as ItemsState),

  actions: {
    getItems(): Promise<any> {
      this.items = [];

      return new Promise<any>((resolve, _) => {
        setTimeout(() => {
          resolve(
{
    "data": {
        "status": "success",
        "resultCount": 62,
        "result":
        [
            {
                "id": 1,
                "createdAt": "2021-09-11T23:37:33.652208+02:00",
                "updatedAt": "2021-09-11T23:37:33.652208+02:00",
                "name": "",
                "description": "Root",
                "parentId": 0
            },
            {
                "id": 2,
                "createdAt": "2021-09-11T23:37:33.653906+02:00",
                "updatedAt": "2021-09-11T23:37:33.653906+02:00",
                "name": "Item 1",
                "description": "Item 1",
                "parentId": 1
            }
        ]
    }
}
          );
        }, 100);
      })
      .then(r => {
        this.items = r.data.result;
        this.itemTree =  makeItemTree(this.items);
      });
    }
  }
});
