import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { GraphBlogList } from './GraphBlogList';
import { BlogNavigationContainer } from './BlogNavigationContainer';

const Tab = createBottomTabNavigator();

export const RootNavigationContainer = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={BlogNavigationContainer} />
    </Tab.Navigator>
  );
};
