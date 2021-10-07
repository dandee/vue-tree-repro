import { BaseModel } from './base-model';
import { TreeNodeConfig } from './tree-view';


export interface Item extends BaseModel {
    name: string;
    description: string;
    parentId: number;
    parent?: Item;
    children?: Item[];

    treeNodeSpec?: TreeNodeConfig;
}
