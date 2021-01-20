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
  setSelected: (selected: string) => void;
  switchMode: (mode: IMode) => void;
}

// <input> <textarea> <select> <multiselect> <object> <array> <select-gallery>
export interface IInput {
  el: 'input';
  value: string;
  placeholder?: string;
  label?: string;
  type?: string;
}

export interface ITextarea {
  type: 'textarea';
  value: string;
  placeholder?: string;
  label?: string;
}

export interface IOptions {
  [key: string]: string | number | boolean;
}

export interface ISelect {
  type: 'select';
  options: IOptions;
  value: string;
  label?: string;
}

export interface IMultiSelect {
  type: 'multiselect';
  options: IOptions;
  value: string;
  label?: string;
}

export interface ISelectGallery {
  type: 'gallery';
  value: string;
  label?: string;
}

export interface IObject {
  type: 'object';
  name: string;
  value: IConfig;
}

export interface IArray {
  type: 'array';
  name: string;
  value: IConfig;
}

export type IElement =
  | IInput
  | ITextarea
  | ISelect
  | IMultiSelect
  | ISelectGallery
  | IObject
  | IArray;

export interface IConfig {
  [key: string]: IElement;
}

export interface IValues {
  [key: string]: string | object | object[];
}

export interface IForm {
  config: IConfig;
}

export interface IGallery {
  images: string[];
  selected: string;
  setSelected: (selected: string) => void;
}
