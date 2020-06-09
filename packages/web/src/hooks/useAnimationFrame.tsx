import { useCallback, useRef, useLayoutEffect } from 'react';
import useIsMounted from './useIsMounted';

/**
 * Hook that runs received callback in animation frames.
 * @param callback - An animation callback.
 */
export default function useAnimationFrame(callback: (time: number) => void) {
  const handleRef = useRef<number>();
  const isMounted = useIsMounted();

  const run = useCallback((time: number) => {
    if (!isMounted()) return;

    callback(time);
    handleRef.current = window.requestAnimationFrame(run);
  }, []);

  useLayoutEffect(() => {
    callback(window.performance.now());
    handleRef.current = window.requestAnimationFrame(run);

    return () => {
      if (handleRef.current) {
        window.cancelAnimationFrame(handleRef.current);
      }
    };
  }, [run]);
}
