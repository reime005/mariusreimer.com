import React from 'react';
import { Gist, BlogContent, ThemeProvider } from '@reime005/common';
import { View, Text, SafeAreaView } from 'react-native';
import { RootContainer } from './src/container/RootContainer';

export default () => (
  <SafeAreaView style={{ flex: 1, paddingVertical: 8 }}>
    <ThemeProvider>
      <RootContainer />
    </ThemeProvider>
  </SafeAreaView>
);
