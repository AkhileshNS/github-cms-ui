import React from 'react';
import styled from '@emotion/styled';
import { colors } from './constants';
import { IFooter } from './types';

const Container = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row-reverse;
  padding: 8px;
  border-top: 1px solid ${colors.gray_border};
  background-color: ${colors.gray_background};
`;

interface IButton {
  color: 'red' | 'green';
}

const Button = styled.button<IButton>`
  margin-left: 4px;
  padding: 4px 12px;
  color: white;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
  outline: none;
  background-color: ${({ color }) =>
    color === 'red' ? colors.red : color === 'green' ? colors.green : 'black'};
  border: 1px solid
    ${({ color }) =>
      color === 'red'
        ? colors.red_border
        : color === 'green'
        ? colors.green_border
        : 'black'};

  :hover {
    background-color: ${({ color }) =>
      color === 'red'
        ? colors.red_border
        : color === 'green'
        ? colors.green_border
        : 'black'};
  }
`;

const Footer: React.FC<IFooter> = (props) => {
  // Primary Button
  let text = 'Update';
  let onClick = props.onUpdate;
  let disabled = false;

  if (props.mode === 'select-gallery') {
    text = 'Select';
    onClick = props.onSelect;
    disabled = true;
    if (props.selected) {
      disabled = false;
    }
  } else if (props.mode === 'manage-gallery' && props.selected === '') {
    text = 'Upload';
    onClick = props.onUpload;
  } else if (props.mode === 'manage-gallery' && props.selected !== '') {
    text = 'Delete';
  }

  if (props.loading) {
    text = 'Loading...';
    disabled = true;
  }

  return (
    <Container>
      <Button
        disabled={disabled}
        onClick={onClick}
        color={
          props.selected !== '' && props.mode === 'manage-gallery'
            ? 'red'
            : 'green'
        }>
        {text}
      </Button>
      {(props.mode === 'manage-gallery' && props.selected !== '') ||
      props.mode === 'select-gallery' ? (
        <Button
          onClick={() => {
            props.setSelected('');
            if (props.mode === 'select-gallery') {
              props.switchMode('form');
            }
          }}
          color='green'>
          {props.mode === 'manage-gallery' ? 'Clear Selection' : 'Cancel'}
        </Button>
      ) : null}
    </Container>
  );
};

export default Footer;
