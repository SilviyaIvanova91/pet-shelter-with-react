import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      const data = JSON.parse(storedData);
      return data;
    }
    return defaultValue;
  });

  const setLocalStorageValue = (newValue) => {
    setValue(newValue);

    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setLocalStorageValue];
};
