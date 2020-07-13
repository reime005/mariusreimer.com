import 'react-native-gesture-handler';

/** @format */
import { AppRegistry } from 'react-native';
import App from './App';

if (!__DEV__) {
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
}

AppRegistry.registerComponent('reime005', () => App);
