import { useEffect, useState } from "react";

interface Args {
  valueToDebounce: string;
  time?: number;
  onAboutToDebounce?: () => void;
}

export function useDebouncedInput({
  valueToDebounce,
  onAboutToDebounce,
  time = 1000,
}: Args) {
  const [deBouncedValue, setValue] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(valueToDebounce);
    }, time);
    onAboutToDebounce?.();
    return () => {
      clearTimeout(timeout);
    };
  }, [valueToDebounce, time]);

  return deBouncedValue;
}
