import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'ramda';
import { search } from '../services/poc';
import withDataProvider from '../hocs/with-data-provider';
import withLoading from '../hocs/with-loading';
import { Message } from '../components/message';

function PocSearchContainer({ render, data }) {
  const { id } = data;
  return id ? (
    render({ id })
  ) : (
    <Message content="Nenhum ponto de venda encontrado para este endereço..." />
  );
  // return this.props.render({});
}

PocSearchContainer.propTypes = {
  render: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.any),
};

PocSearchContainer.defaultProps = {
  data: {},
};

const fetchNearestPoc = async ({ props, state }) => {
  const { lat, long } = props;
  const result = await search({ lat, long });
  return result[0];
};

const renderLoading = () => <Message content="Buscando ponto de venda..." />;

const enhancer = compose(
  withDataProvider({ fetch: fetchNearestPoc }),
  withLoading(renderLoading)
);

export default enhancer(PocSearchContainer);
