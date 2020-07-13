import { storage } from './storage';
import { GitFile } from './setCachedCodes';

export const getCachedCode = async (id): Promise<GitFile | null> => {
  try {
    let codes = await storage.get(id);

    return codes;
  } catch (error) {
    console.warn(error);
  }

  return null;
};
