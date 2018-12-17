import React from 'react';
import PropTypes from 'prop-types';
import { find } from '../services/maps';
import { AddressSearchForm } from '../components/address-search';

export default class AddressSearchContainer extends React.Component {
  static propTypes = {
    handleAddressChange: PropTypes.func.isRequired,
    address: PropTypes.string,
  };

  static defaultProps = {
    address: '',
  };

  handleSubmit = async ({ address }) => {
    const addressInfo = await find({ address });
    this.props.handleAddressChange(addressInfo);
  };

  render() {
    return (
      <AddressSearchForm
        address={this.props.address}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
