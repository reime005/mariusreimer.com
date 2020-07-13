import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { GraphBlogList } from './GraphBlogList';
import { GraphBlogContent } from './GraphBlogContent';

const Stack = createStackNavigator();

export const BlogNavigationContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Posts" component={GraphBlogList} />
      <Stack.Screen name="Post" component={GraphBlogContent} />
    </Stack.Navigator>
  );
};
