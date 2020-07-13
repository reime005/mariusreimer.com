import { storage } from './storage';

export interface GitFile {
  id: string;
  filename: string;
  type: string;
  language: string;
  raw_url: string;
  content: string;
}

export const setCachedCodes = async (id, input: GitFile): Promise<void> => {
  try {
    return storage.set(id, input);
  } catch (error) {
    console.warn(error);
  }
};
