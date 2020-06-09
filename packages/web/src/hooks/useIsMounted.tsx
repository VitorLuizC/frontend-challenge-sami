import { useCallback, useEffect, useRef } from 'react';

/**
 * Hook that provides a function that checks if component is mounted.
 */
const useIsMounted = () => {
  const isMountedRef = useRef(true);

  useEffect(() => () => {
    isMountedRef.current = false;
  });

  return useCallback(() => isMountedRef.current, []);
};

export default useIsMounted;
