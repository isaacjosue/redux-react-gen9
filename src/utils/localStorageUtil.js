export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key, initValue) => {
    const value = JSON.parse(localStorage.getItem(key));
    if (value) {
      return value;
    } else {
      setLocalStorage(key, initValue);
      return initValue;
    }
};
