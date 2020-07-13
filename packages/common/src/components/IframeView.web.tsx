import React from 'react';

interface Props {
  src: string;
}

export const IframeView = (props: Props) => {
  return <iframe style={{ flex: 1 }} src={props.src} />;
};
