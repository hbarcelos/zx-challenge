import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import deepEqual from 'deep-equal';
import { curry, omit } from 'ramda';
import getDisplayName from './helpers/get-display-name';

const omitIsLoading = omit(['isLoading']);

function withDataProvider({ fetch, initialData }, WrappedComponent) {
  class WithDataProvider extends React.Component {
    isMounted = false;

    state = {
      isLoading: false,
    };

    componentDidMount() {
      this.isMounted = true;
      this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
      const stateWithoutLoading = omitIsLoading(this.state);
      const prevStateWithoutLoading = omitIsLoading(prevState);

      if (
        !deepEqual(this.props, prevProps) ||
        !deepEqual(stateWithoutLoading, prevStateWithoutLoading)
      ) {
        this.loadData();
      }
    }

    componentWillUnmount() {
      this.isMounted = false;
    }

    async loadData() {
      const { state, props } = this;

      this.setState({ isLoading: true });
      try {
        const result = await fetch({ props, state });
        if (this.isMounted) {
          this.setState({ data: result, isLoading: false });
        }
      } catch (err) {
        if (this.isMounted) {
          this.setState({ isLoading: false, data: initialData });
        }
      }
    }

    render() {
      const passthroughProps = this.props;

      return (
        <WrappedComponent
          data={this.state.data}
          isLoading={this.state.isLoading}
          {...passthroughProps}
        />
      );
    }
  }

  const componentName = getDisplayName(WrappedComponent);

  WithDataProvider.displayName = `WithDataProvider(${componentName})`;
  hoistNonReactStatics(WithDataProvider, WrappedComponent);

  return WithDataProvider;
}

export default curry(withDataProvider);
