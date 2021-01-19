export interface ISidebar {
  open: boolean;
}

export type mode = 'select-gallery' | 'manage-gallery' | 'form';

export interface IHeader {
  author: string;
  repo: string;
  onClose: () => void;
  mode: mode;
  switchMode: (mode: mode) => void;
}

export interface ITab {
  active: boolean;
}
