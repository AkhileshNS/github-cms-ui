import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useCMS = () => {
  let [open, setOpen] = useState(true);

  return {
    open,
    setOpen,
  };
};

export default createContainer(useCMS);
