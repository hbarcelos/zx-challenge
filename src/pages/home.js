import React from 'react';
import { Redirect } from 'react-router-dom';
import { Splash } from '../components/splash';
import { Message } from '../components/message';
import AddressSearchContainer from '../containers/address-search';
import PocSearchContainer from '../containers/poc-search';

export default class ProductSearch extends React.Component {
  state = {
    geolocation: {},
  };

  handleAddressChange = geolocation => {
    this.setState({ geolocation });
  };

  render() {
    const { lat, long, address } = this.state.geolocation;
    return (
      <Splash>
        <AddressSearchContainer
          handleAddressChange={this.handleAddressChange}
        />
        {lat && long ? (
          <PocSearchContainer
            lat={lat}
            long={long}
            render={({ id }) => {
              const queryString = new URLSearchParams();
              queryString.set('pocId', id);
              queryString.set('lat', lat);
              queryString.set('long', long);
              queryString.set('address', address);

              return <Redirect to={`/produtos?${queryString}`} />;
            }}
          />
        ) : (
          <Message content="&nbsp;" />
        )}
      </Splash>
    );
  }
}
