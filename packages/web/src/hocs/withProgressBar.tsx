import React, { ComponentType, lazy, Suspense, ComponentProps } from 'react';

import ProgressBar from '../components/ProgressBar';

/**
 * A HOC that receives a factory for async components, wrap it with Suspense and
 * renders progress bar as fallback.
 * @param factory - An async function that returns a module that default export
 */
export default function withProgressBar<Component extends ComponentType<any>>(
  factory: () => Promise<{ default: Component }>,
) {
  const Component = lazy(factory);

  const WithProgressBar = (props: ComponentProps<Component>) => (
    <Suspense fallback={<ProgressBar />}>
      <Component {...props} />
    </Suspense>
  );

  return WithProgressBar;
}
