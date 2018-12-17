import React from 'react';
import PropTypes from 'prop-types';
import './form.css';

export default class AddressSearchForm extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    address: PropTypes.string,
  };

  static defaultProps = {
    address: '',
  };

  state = {
    address: this.props.address,
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  internalHandleSubmit = event => {
    event.preventDefault();
    const { address } = this.state;

    if (!address) {
      return;
    }

    const { handleSubmit } = this.props;
    handleSubmit({ address });
  };

  render() {
    return (
      <form onSubmit={this.internalHandleSubmit} className="address-search">
        <label
          htmlFor="address"
          className="address-search__label address-search__label--sr-only"
        >
          Seu endereço:
        </label>
        <input
          id="address"
          className="address-search__field"
          name="address"
          type="text"
          value={this.state.address}
          onChange={this.handleChange}
          placeholder="Digite seu endereço para buscar produtos..."
        />
        <button
          type="submit"
          className="address-search__btn address-search__btn--primary"
          disabled={!this.state.address}
        >
          Buscar
        </button>
      </form>
    );
  }
}
