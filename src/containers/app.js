import React from 'react';
import AddressSearchContainer from './address-search';
import PocSearchContainer from './poc-search';
import ProductListContainer from './product-list';

export default class App extends React.Component {
  state = {
    geolocation: {},
  };

  handleAddressChange = geolocation => {
    this.setState({ geolocation });
  };

  render() {
    const { lat, long } = this.state.geolocation;
    return (
      <div className="app">
        <AddressSearchContainer
          handleAddressChange={this.handleAddressChange}
        />

        {lat && long ? (
          <PocSearchContainer
            lat={lat}
            long={long}
            render={({ id }) => <ProductListContainer pocId={id} />}
          />
        ) : null}
      </div>
    );
  }
}
