import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';
import { Nav } from '../components/nav';
import AddressSearchContainer from '../containers/address-search';
import PocSearchContainer from '../containers/poc-search';
import ProductListContainer from '../containers/product-list';

const parseQueryString = props => {
  const { search } = props.location;
  const params = new URLSearchParams(search);

  const lat = params.get('lat');
  const long = params.get('long');
  const address = params.get('address');
  const pocId = params.get('pocId');

  return { lat, long, address, pocId };
};

const extractInitialState = ({ pocId, lat, long, address }) => ({
  geolocation: { lat, long },
  address,
  pocId,
});

export default class ProductSearch extends React.Component {
  state = extractInitialState(parseQueryString(this.props));

  handleAddressChange = geolocation => {
    this.setState({ geolocation, pocId: undefined });
  };

  renderPoc() {
    const { lat, long } = this.state.geolocation;
    return this.state.pocId ? (
      <ProductListContainer pocId={this.state.pocId} />
    ) : (
      <PocSearchContainer
        lat={lat}
        long={long}
        render={({ id }) => <ProductListContainer pocId={id} />}
      />
    );
  }

  render() {
    const { geolocation, address } = this.state;
    const { lat, long } = geolocation;
    return (
      <React.Fragment>
        <Header>
          <AddressSearchContainer
            handleAddressChange={this.handleAddressChange}
            address={address}
          />
        </Header>
        <Nav
          items={{
            home: {
              path: '/',
              content: 'Voltar ao início',
            },
          }}
        />
        {lat && long ? this.renderPoc() : null}
      </React.Fragment>
    );
  }
}
