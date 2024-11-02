import { useCallback, useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount((count) => count + 1), []);
  const decrement = useCallback(() => setCount((count) => count - 1), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  return { count, increment, decrement, reset };
};

//just a reffrence on the use of useMemo
/*const requirements = useMemo(() => {
  // Calls your function and caches its result
  return computeRequirements(product);
}, [product]);*/
