import React from 'react';
import Router from './containers/router';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router />
      </div>
    );
  }
}
