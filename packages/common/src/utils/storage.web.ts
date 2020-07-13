import { GitFile } from './setCachedCodes';

const storage = {
  get: (key: string) => JSON.parse(localStorage.getItem(key) || 'null'),
  set: (key: string, value: GitFile) =>
    localStorage.setItem(key, JSON.stringify(value)),
};

export { storage };
