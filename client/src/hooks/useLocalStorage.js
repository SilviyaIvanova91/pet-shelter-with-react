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
    localStorage.setItem(key, JSON.stringify(newValue));

    setValue(newValue);
  };

  return [value, setLocalStorageValue];
};
