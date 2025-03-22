import { useState, useEffect } from "react";

export const useDebounce = () => {
  const [valueAfterTimeout, setValueAfterTimeout] = useState<string | null>(
    null
  );
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const deleteSearchValue = () => setSearchValue("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!searchValue) {
        setValueAfterTimeout(null);
      } else {
        setValueAfterTimeout(searchValue);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchValue]);

  return {
    setSearchValue,
    searchValue,
    valueAfterTimeout,
    setValueAfterTimeout,
    deleteSearchValue,
  };
};
