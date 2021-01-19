import styled from '@emotion/styled';
import { ISidebar } from './types';

const Sidebar = styled.div<ISidebar>`
  height: 100%;
  width: 100%;
  max-width: 400px;
  position: absolute;
  top: 0;
  left: ${({ open }) => (open ? 0 : -420)}px;
  background-color: white;
  z-index: 100;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.2s all ease;
  display: flex;
  flex-direction: column;
`;

export default Sidebar;
