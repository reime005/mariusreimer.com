import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  scrollPercentage: number;
}

const Wrapper = styled.View`
  z-index: 1;
  background-color: rgba(214, 214, 214, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 10px;
  border-color: rgba(214, 214, 214, 0.8);
  height: 150px;
  position: ${Platform.OS === 'web' ? 'fixed' : 'absolute'};
  right: 5;
  top: 50;
`;

const Scroller = styled.View`
  height: 25px;
  width: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.scroller};
  position: absolute;
`;

//TODO: add 'scroll to top / bottom buttons'
export const ScrollBox = (props: Props) => {
  let top = (150 * props.scrollPercentage) / 100;

  if (top < 0) {
    top = 0;
  } else if (top >= 150 - 25 - 20) {
    top = 150 - 25 - 20;
  }

  return (
    <Wrapper>
      <Scroller
        style={{
          top,
        }}
      />
    </Wrapper>
  );
};
