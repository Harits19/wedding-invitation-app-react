import { useEffect, useState } from "react";

export default function useDebounce<T>({
  value,
  delay = 200,
}: {
  value: T;
  delay?: number;
}) {
  const stringVal = JSON.stringify(value);

  const [debounceValue, setDebounceValue] = useState(stringVal);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(stringVal);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [stringVal, delay]);

  return JSON.parse(debounceValue) as T;
}

export const useDebounceFunc = () => {
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const debounce = (callback: Function, delay: number) => {
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        callback();
      }, delay)
    );
  };

  return debounce
};
