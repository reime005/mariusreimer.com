import React from 'react';
import { View } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { tomorrowNightBright as st } from 'react-syntax-highlighter/styles/hljs';

interface Props {
  rawCode: string;
  language: string;
}

// HACK: removes scroll bars on web...
delete st.hljs.overflowX;

st.hljs.background = '#141414';

export const SyntaxCode = (props: Props) => {
  if (props.rawCode) {
    return (
      <View
        style={{
          justifyContent: 'center',
          width: '100%',
          padding: 16,
          backgroundColor: '#141414',
          borderRadius: 8,
          marginBottom: 16,
        }}
      >
        <SyntaxHighlighter
          fontSize={12}
          language={props.language.toLowerCase()}
          style={st}
        >
          {props.rawCode}
        </SyntaxHighlighter>
      </View>
    );
  }

  return null;
};
