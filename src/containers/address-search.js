import React from 'react';
import PropTypes from 'prop-types';
import { find } from '../services/maps';
import { AddressSearchForm } from '../components/address-search';

export default class AddressSearchContainer extends React.Component {
  static propTypes = {
    handleAddressChange: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  handleSubmit = async ({ address }) => {
    const addressInfo = await find({ address });
    this.props.handleAddressChange(addressInfo);
  };

  render() {
    return <AddressSearchForm handleSubmit={this.handleSubmit} />;
  }
}
