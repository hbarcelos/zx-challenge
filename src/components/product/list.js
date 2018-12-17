import React from 'react';
import PropTypes from 'prop-types';
import './list.css';

export default function ProductList({ render, data }) {
  return (
    <div className="product__list">{data.map(product => render(product))}</div>
  );
}

ProductList.propTypes = {
  render: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
};

ProductList.defaultProps = {
  data: [],
};
