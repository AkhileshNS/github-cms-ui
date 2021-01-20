import React from 'react';
import { IGallery } from './types';
import styled from '@emotion/styled';
import { colors } from './constants';

const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 8px;
`;

interface IImg {
  selected: boolean;
}

const Image = styled.img<IImg>`
  margin-bottom: 8px;
  width: 100%;
  outline: 3px solid
    ${({ selected }) => (selected ? colors.blue : 'transparent')};
  cursor: pointer;

  :last-of-type {
    margin-bottom: 8px;
  }
`;

const Gallery: React.FC<IGallery> = (props) => {
  return (
    <Container>
      {props.images.map((image) => (
        <Image
          onClick={() => props.setSelected(image)}
          selected={props.selected === image}
          key={image}
          src={`/assets/${image}`}
        />
      ))}
    </Container>
  );
};

export default Gallery;
