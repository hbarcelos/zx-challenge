import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'ramda';
import { getProductList } from '../services/poc';
import withDataProvider from '../hocs/with-data-provider';
import withLoading from '../hocs/with-loading';
import {
  EmptyProductList,
  ProductList,
  ProductCard,
} from '../components/product';
import { Message } from '../components/message';

const renderProduct = product => (
  <ProductCard key={`${product.title}-${product.imageUrl}`} {...product} />
);

function ProductListContainer({ data }) {
  return data && data.length > 0 ? (
    <ProductList data={data} render={renderProduct} />
  ) : (
    <EmptyProductList />
  );
}

ProductListContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

ProductListContainer.defaultProps = {
  data: [],
};

const fetchProducts = async ({ props, state }) => {
  const { pocId, filter, category } = props;
  return getProductList({ pocId, filter, category });
};

const renderLoading = () => <Message content="Buscando produtos..." />;

const enhancer = compose(
  withDataProvider({
    fetch: fetchProducts,
    initialData: [],
  }),
  withLoading(renderLoading)
);

export default enhancer(ProductListContainer);
