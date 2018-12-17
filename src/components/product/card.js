import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const brlCurrency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default function ProductCard({ title, imageUrl, price }) {
  return (
    <div className="product__card">
      <figure className="product__img-wrapper">
        <img src={imageUrl} alt={title} className="product__img" />
      </figure>
      <p className="product__info">
        <span className="product__title">{title}</span>
        <span className="product__price">{brlCurrency.format(price)}</span>
      </p>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
