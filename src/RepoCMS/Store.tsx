import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { mode } from './types';

const useCMS = () => {
  let [open, setOpen] = useState(true);
  let [mode, switchMode] = useState<mode>('form');

  return {
    open,
    setOpen,
    mode,
    switchMode,
  };
};

export default createContainer(useCMS);
