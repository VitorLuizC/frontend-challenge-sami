import { useCallback, useRef, useLayoutEffect } from 'react';

/**
 * Hook that runs received callback in animation frames.
 * @param callback - An animation callback.
 */
export default function useAnimationFrame(callback: (time: number) => void) {
  const handleRef = useRef<number>();

  const run = useCallback((time: number) => {
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
