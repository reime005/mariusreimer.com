import React from 'react';
import { Switch, View } from 'react-native';
import { useTheme } from './ThemeProvider';

export const IconSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  const isEnabled = theme === 'dark';

  return (
    <Switch
      nativeID="darkThemeSwitch"
      key={theme}
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleTheme}
      value={isEnabled}
    >
      <View
        style={{
          position: 'absolute',
          width: 5,
          height: 5,
          left: 5,
          zIndex: 5,
          backgroundColor: 'red',
        }}
      />
    </Switch>
  );
};
