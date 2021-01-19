import React from 'react';
import styled from '@emotion/styled';
import { MdAssignment as Form, MdInsertPhoto as Gallery } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { colors } from './constants';
import { IHeader, ITab } from './types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${colors.gray_border};
  background-color: ${colors.gray_background};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`;

const Title = styled.p`
  margin-right: auto;
  margin-left: 8px;
  font-size: 18px;

  > span,
  a {
    color: ${colors.gray_text};
    margin-right: 4px;
    text-decoration: none;
  }

  > a {
    color: ${colors.blue};

    :last-of-type {
      font-weight: 600;
    }

    :hover {
      text-decoration: underline;
    }
  }
`;

const Button = styled.button`
  padding: 5px 9px 4px 8px;
  color: white;
  font-weight: 600;
  background-color: ${colors.red};
  border: 1px solid ${colors.red_border};
  margin-left: auto;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: ${colors.red_border};
    transition: 0.2s all ease;
  }
`;

const Tabs = styled.div`
  display: flex;
  padding: 0 8px;
`;

const Tab = styled.div<ITab>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.gray_icon};
  cursor: pointer;
  border-bottom: 2px solid ${colors.gray_background};
  padding-right: 12px;
  padding-left: 8px;

  p {
    margin-left: 4px;
    margin-bottom: 1px;
    color: ${colors.gray_text};
  }

  :hover {
    border-bottom: 2px solid
      ${({ active }) => (active ? colors.red_light : colors.gray_icon)};
  }

  ${({ active }) =>
    active
      ? `
    font-weight: 600;
    color: ${colors.gray_dark};
    border-bottom: 2px solid ${colors.red_light};
  `
      : null}
`;

const TabContent = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0 8px;
`;

const Header: React.FC<IHeader> = (props) => {
  return (
    <Container>
      <Content>
        <Title>
          <a
            href={`https://github.com/${props.author}`}
            target='_blank'
            rel='noopener noreferrer'>
            {props.author}
          </a>
          <span>/</span>
          <a
            href={`https://github.com/${props.author}/${props.repo}`}
            target='_blank'
            rel='noopener noreferrer'>
            {props.repo}
          </a>
        </Title>
        <Button onClick={props.onClose}>X</Button>
      </Content>
      <Tabs>
        <Tab
          active={props.mode === 'form'}
          onClick={() => props.switchMode('form')}>
          <TabContent>
            <IconContext.Provider value={{ size: '16px' }}>
              <Form />
            </IconContext.Provider>
            <p>Form</p>
          </TabContent>
        </Tab>
        <Tab
          active={props.mode === 'manage-gallery'}
          onClick={() => props.switchMode('manage-gallery')}>
          <TabContent>
            <IconContext.Provider value={{ size: '16px' }}>
              <Gallery />
            </IconContext.Provider>
            <p>Gallery</p>
          </TabContent>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Header;
