export interface ISidebar {
  open: boolean;
}

export type IMode = 'select-gallery' | 'manage-gallery' | 'form';

export interface IHeader {
  author: string;
  repo: string;
  onClose: () => void;
  mode: IMode;
  switchMode: (mode: IMode) => void;
}

export interface ITab {
  active: boolean;
}

export interface IFooter {
  mode: IMode;
  selected: string;
  loading: boolean;
  onUpdate: () => void;
  onSelect: () => void;
  onUpload: () => void;
  onDelete: () => void;
}
