import React from 'react';
import { WebView } from 'react-native-webview';

interface Props {
  src: string;
}

export const IframeView = (props: Props) => {
  return <WebView style={{ flex: 1 }} source={{ uri: props.src }} />;
};
