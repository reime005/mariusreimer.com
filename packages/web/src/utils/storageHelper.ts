const globalStorage: { [key: string]: string } = {};

export const getItem = (key: string) => {
  try {
    const ret = localStorage.getItem(key);
    return ret;
  } catch (error) {
    return globalStorage[key] || null;
  }
};

export const setItem = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    globalStorage[key] = value;
  }
};
