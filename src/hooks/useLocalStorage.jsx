const { useState } = require("react");

const useLocalStorage = (key, defaultValue = 0) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.log(error);
      return defaultValue;
    }
  });

  const setValue = (value) => {
    setStoredValue((prevValue) => {
      const valueToStore =
        typeof value === "function" ? value(prevValue) : value;
      localStorage.setItem(key, JSON.stringify(valueToStore));
      return valueToStore;
    });
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
