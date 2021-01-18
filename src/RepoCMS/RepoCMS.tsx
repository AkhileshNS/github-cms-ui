import styled from '@emotion/styled';
import React from 'react';
import { CMS } from 'RepoCMS';

// Step 1: Build Sidebar [DONE]
// Step 2: Add Form (<input />, <textarea /> and <select />)

interface ISidebar {
  open: boolean;
}

const Sidebar = styled.div<ISidebar>`
  height: 100%;
  width: 300px;
  position: absolute;
  top: 0;
  left: ${({ open }) => (open ? 0 : -320)}px;
  background-color: white;
  z-index: 100;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.2s all ease;
`;

interface IProps {}

const RepoCMS: React.FC<IProps> = () => {
  const cms = CMS.useContainer();

  return (
    <>
      <Sidebar open={cms.open} onClick={() => cms.setOpen(false)} />
    </>
  );
};

export default RepoCMS;
