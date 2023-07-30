export const setItemInLocalStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

export const getItemFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};
