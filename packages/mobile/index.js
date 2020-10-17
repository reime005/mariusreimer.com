import 'react-native-gesture-handler';

/** @format */
import { AppRegistry, YellowBox } from 'react-native';
import App from './App';

YellowBox.ignoreWarnings(['Invalid prop `onPress`']);

if (!__DEV__) {
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
}

AppRegistry.registerComponent('reime005', () => App);
