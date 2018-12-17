import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { curry } from 'ramda';
import getDisplayName from './helpers/get-display-name';

function withLoading(PreloaderComponent, WrappedComponent) {
  function WithLoading({ isLoading, ...passthroughProps }) {
    return isLoading ? (
      <PreloaderComponent />
    ) : (
      <WrappedComponent {...passthroughProps} />
    );
  }

  const componentName = getDisplayName(WrappedComponent);

  WithLoading.displayName = `WithLoading(${componentName})`;
  hoistNonReactStatics(WithLoading, WrappedComponent);

  return WithLoading;
}

export default curry(withLoading);
