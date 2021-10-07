export interface TreeNodeInputConfig {
  type?: string;
  name?: string;
  value?: string;
  isInitialRadioGroupValue?: boolean;
}

export interface TreeNodeState {
  expanded?: boolean;
  selected?: boolean;
}

export interface TreeNodeConfig {
  addChildCallback?: () => Promise<any>;
  addChildTitle?: string;
  allowDrop?: boolean;
  childrenProperty?: string;
  deletable?: boolean;
  deleteTitle?: string;
  draggable?: boolean;
  expandable?: boolean;
  expanderTitle?: string;
  focusable?: boolean;
  idProperty?: string;
  input?: TreeNodeInputConfig;
  labelProperty?: string;
  loadChildrenAsync?: () => Promise<any>;
  selectable?: boolean;
  state?: TreeNodeState;
  title?: string;
}
