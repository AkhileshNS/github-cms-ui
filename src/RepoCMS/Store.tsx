import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { IMode } from './types';

const useCMS = () => {
  let [open, setOpen] = useState(true);
  let [mode, switchMode] = useState<IMode>('form');
  let [selected, setSelected] = useState('');

  return {
    open,
    mode,
    selected,

    setOpen,
    switchMode,
    setSelected,
  };
};

export default createContainer(useCMS);
