import { GitFile } from './setCachedCodes';
import AsyncStorage from '@react-native-community/async-storage';

export type StorageKey = '@reime005/lastCodeUpdate' | '';

const storage = {
  get: async (key: StorageKey) => {
    let raw = await AsyncStorage.getItem(key);
    return JSON.parse(raw || 'null');
  },
  set: async (key: StorageKey, value: GitFile) => {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  },
};

export { storage };
