import React from 'react';
import { View } from 'react-native';
import { useDimensions } from '../utils/useDimensions';

interface Props {
  maxWidth: number;
  maxHeight: number;
  children?: any;
}

export const IframeWrapper = (props: Props) => {
  const { window = { width: 0, height: 0 } } = useDimensions();

  let realSize = { width: props.maxWidth, height: props.maxHeight };

  if (realSize.width > window.width * 0.9) {
    const ratio = (window.width * 0.8) / realSize.width;
    realSize = { width: window.width * 0.8, height: realSize.height * ratio };
  }

  return (
    <View
      style={{
        flex: 1,
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight,
        width: '100%',
        height: realSize.height,
      }}
    >
      {props.children}
    </View>
  );
};
